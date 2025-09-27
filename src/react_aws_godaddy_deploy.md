# 🚀 React App Deployment to AWS (S3 + CloudFront) with GoDaddy Domain & GitHub Actions

This document is a **step-by-step tutorial** for deploying a React app to AWS with **S3 + CloudFront + SSL + GoDaddy DNS + GitHub Actions CI/CD + WAF security**.
It explains **what to copy, what to paste, and why each step is needed**.

---

## 🎯 Goal
Deploy a React app to **jeshanpharma.com** with:
- ✅ Hosting in **S3** (static files)
- ✅ Served via **CloudFront CDN**
- ✅ Secured with **ACM SSL certificate**
- ✅ Auto-deployment via **GitHub Actions**
- ✅ Custom domain on **GoDaddy**
- ✅ Protected with **AWS WAF**

---

## 🛠 Step 1: Request SSL Certificate (ACM)

**Why?** HTTPS requires an SSL certificate. CloudFront uses ACM certificates (must be in `us-east-1`).

1. Go to **AWS Console → Certificate Manager (ACM)**.
2. Click **Request → Public certificate**.
3. Enter domains:
   - `jeshanpharma.com`
   - `www.jeshanpharma.com`
4. Choose **DNS validation**.
5. AWS will give you **CNAME records** like:
   ```
   _be219bcd...jeshanpharma.com → _9662e9cba...acm-validations.aws
   _d034dcfe...www.jeshanpharma.com → _1c80e27e...acm-validations.aws
   ```
6. Go to **GoDaddy → DNS Management → Add Record → CNAME**:
   - **Name** = `_be219bcd...`
   - **Value** = `_9662e9cba...acm-validations.aws`
   - TTL = 1 Hour
7. Repeat for `www.jeshanpharma.com`.
8. Wait until ACM shows **Issued** ✅.

---

## 🛠 Step 2: Create CloudFormation `template.yaml`

**Why?** Infrastructure as code → automate creation of S3 bucket + CloudFront.

Create file `template.yaml`:

```yaml
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31
Description: React App hosting infra

Parameters:
  EnvName:
    Type: String
    Default: production

Resources:
  ReactAppBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Sub react-app-${EnvName}-${AWS::AccountId}
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: index.html

  ReactAppBucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref ReactAppBucket
      PolicyDocument:
        Statement:
          - Effect: Allow
            Principal: "*"
            Action: s3:GetObject
            Resource: !Sub "${ReactAppBucket.Arn}/*"

  ReactAppDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Enabled: true
        DefaultRootObject: index.html
        Aliases:
          - jeshanpharma.com
          - www.jeshanpharma.com
        ViewerCertificate:
          AcmCertificateArn: arn:aws:acm:us-east-1:YOUR-ACM-ARN-HERE
          SslSupportMethod: sni-only
          MinimumProtocolVersion: TLSv1.2_2021
        Origins:
          - DomainName: !GetAtt ReactAppBucket.RegionalDomainName
            Id: ReactAppOrigin
            S3OriginConfig: {}
        DefaultCacheBehavior:
          TargetOriginId: ReactAppOrigin
          ViewerProtocolPolicy: redirect-to-https
          AllowedMethods: [GET, HEAD]
          CachedMethods: [GET, HEAD]
        PriceClass: PriceClass_100

Outputs:
  BucketName:
    Value: !Ref ReactAppBucket
  DistributionId:
    Value: !Ref ReactAppDistribution
```

---

## 🛠 Step 3: Add GitHub Secrets

**Why?** GitHub Actions needs AWS access.

Go to **GitHub → Repo → Settings → Secrets → Actions → New Secret**.

Add:

| Secret | Value | Purpose |
|--------|-------|---------|
| `AWS_ACCESS_KEY_ID` | IAM Access Key | Deploy rights |
| `AWS_SECRET_ACCESS_KEY` | IAM Secret | Auth for AWS |
| `AWS_REGION` | `us-east-1` | ACM & CloudFront live here |

---

## 🛠 Step 4: Create GitHub Workflow `deploy.yml`

**Why?** Automates build → S3 upload → CloudFront cache refresh.

Create file `.github/workflows/deploy.yml`:

```yaml
name: Deploy React App Infra + Code

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Install AWS SAM CLI
        run: pip install aws-sam-cli

      - name: Deploy infrastructure
        run: sam deploy --template-file template.yaml --stack-name react-app-production --capabilities CAPABILITY_IAM --parameter-overrides EnvName=production --no-fail-on-empty-changeset

      - name: Fetch CloudFormation Outputs
        id: outputs
        run: |
          echo "bucket=$(aws cloudformation describe-stacks --stack-name react-app-production --query \"Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue\" --output text)" >> $GITHUB_ENV
          echo "distribution_id=$(aws cloudformation describe-stacks --stack-name react-app-production --query \"Stacks[0].Outputs[?OutputKey=='DistributionId'].OutputValue\" --output text)" >> $GITHUB_ENV

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build React App
        run: npm run build

      - name: Deploy to S3
        run: aws s3 sync build/ s3://${{ env.bucket }} --delete

      - name: Invalidate CloudFront cache
        run: aws cloudfront create-invalidation --distribution-id ${{ env.distribution_id }} --paths "/*"
```

---

## 🛠 Step 5: Configure GoDaddy DNS

**Why?** Link your domain to CloudFront.

1. Delete old `A` record (`Parked`).
2. Add new CNAME records:
   - **Type:** CNAME
   - **Name:** `@`
   - **Value:** `<your-cloudfront-domain>.cloudfront.net`

   - **Type:** CNAME
   - **Name:** `www`
   - **Value:** `<your-cloudfront-domain>.cloudfront.net`

3. (Optional) Forward `www` → root.

✅ Now both `https://jeshanpharma.com` & `https://www.jeshanpharma.com` work.

---

## 🛠 Step 6: Add WAF (Web Application Firewall)

**Why?** Protect site from bots, SQL injection, DDoS.

1. Go to **AWS Console → WAF**.
2. Click **Create Web ACL** → Scope = CloudFront.
3. Select distribution.
4. Add Free Rule Groups (recommended):
   - Amazon IP Reputation List
   - Core rule set
   - Anonymous IP list
   - Known Bad Inputs
5. Enable sampling for monitoring.
6. Review → Create.

---

## ✅ Final Flow

1. Push code → GitHub → triggers Action.
2. GitHub builds React → uploads to S3 → invalidates CloudFront.
3. CloudFront serves updated site at `jeshanpharma.com`.
4. SSL from ACM ensures HTTPS.
5. WAF protects against malicious traffic.

---

📌 With this setup, you have a **production-ready, automated, and secure deployment pipeline** for any React project.

