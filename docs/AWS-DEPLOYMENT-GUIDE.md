# AWS Deployment Guide

**Deploy your landing page to AWS using natural language with your AI coding assistant**

This guide walks you through the complete process: creating an AWS account, setting up credentials, and deploying your containerized application—all using natural language commands with Gemini CLI, Claude Code, or Codex.

---

## Table of Contents

1. [Create AWS Account](#1-create-aws-account-manual)
2. [Create IAM User](#2-create-iam-user-manual)
3. [Install AWS CLI](#3-install-aws-cli)
4. [Configure AWS CLI](#4-configure-aws-cli-with-ai)
5. [Deploy Infrastructure](#5-deploy-infrastructure-with-ai)
6. [Deploy Application](#6-deploy-application-with-ai)
7. [Verify & Monitor](#7-verify--monitor)
8. [Clean Up](#8-clean-up-resources)

---

## Cost-Optimized Region

**Recommended Region: `us-east-2` (Ohio)**

| Region | Why |
|--------|-----|
| **us-east-2 (Ohio)** | Lowest cost US region, full App Runner support, good latency |
| us-east-1 (N. Virginia) | Slightly higher cost, most services available |
| us-west-2 (Oregon) | Good for West Coast, moderate cost |

**Estimated Monthly Cost**: $5-15/month for a landing page with low traffic.

---

## 1. Create AWS Account (Manual)

This step must be done manually in your browser.

### Steps

1. **Go to AWS**: https://aws.amazon.com/
2. **Click "Create an AWS Account"**
3. **Enter your email and choose an account name**
   - Use a professional email you check regularly
   - Account name: e.g., "MyLandingPage" or your business name
4. **Verify your email** with the code sent
5. **Set a strong root password** (save it in a password manager)
6. **Choose account type**: Personal or Business
7. **Enter contact information**
8. **Add payment method** (credit/debit card required)
   - You won't be charged unless you exceed free tier
9. **Verify your identity** via phone
10. **Select support plan**: Choose "Basic support - Free"
11. **Complete sign-up**

### Important Security Notes

- **Enable MFA on root account immediately** after creation
- **Never use root account for daily tasks** - create an IAM user (next step)
- Root account should only be used for billing and initial IAM setup

---

## 2. Create IAM User (Manual)

Create a dedicated user for deployments instead of using root credentials.

### Steps

1. **Sign in to AWS Console** as root user: https://console.aws.amazon.com/
2. **Search for "IAM"** in the top search bar and open it
3. **Click "Users"** in the left sidebar
4. **Click "Create user"**

### User Configuration

| Setting | Value |
|---------|-------|
| User name | `landing-page-deployer` |
| Access type | ✅ Access key - Programmatic access |
| Console access | Optional (uncheck if CLI-only) |

5. **Click "Next: Permissions"**
6. **Click "Attach policies directly"**
7. **Search and select these policies**:

| Policy | Purpose |
|--------|---------|
| `AmazonEC2ContainerRegistryFullAccess` | Push Docker images to ECR |
| `AWSAppRunnerFullAccess` | Create and manage App Runner services |
| `CloudWatchLogsFullAccess` | View application logs |

8. **Click "Next: Tags"** (skip, or add tags for organization)
9. **Click "Next: Review"**
10. **Click "Create user"**

### Download Credentials

**CRITICAL: This is your only chance to see the secret key!**

11. **Click "Download .csv"** to save credentials
12. **Store the file securely** (password manager or encrypted storage)
13. **Note these values**:
    - Access Key ID: `AKIA...` (20 characters)
    - Secret Access Key: `...` (40 characters)

### Security Best Practices

- Never commit credentials to git
- Never share credentials via email or chat
- Rotate keys every 90 days
- Delete the CSV file after configuring CLI

---

## 3. Install AWS CLI

### macOS (Homebrew)

| Natural Language | CLI Command |
|-----------------|-------------|
| "Install AWS CLI using Homebrew" | `brew install awscli` |
| "Verify AWS CLI is installed" | `aws --version` |

### Manual Installation (if not using Homebrew)

| Natural Language | CLI Command |
|-----------------|-------------|
| "Download and install AWS CLI for macOS" | `curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg" && sudo installer -pkg AWSCLIV2.pkg -target /` |

### Windows

| Natural Language | CLI Command |
|-----------------|-------------|
| "Install AWS CLI on Windows" | Download from https://awscli.amazonaws.com/AWSCLIV2.msi |

### Linux

| Natural Language | CLI Command |
|-----------------|-------------|
| "Install AWS CLI on Linux" | `curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install` |

---

## 4. Configure AWS CLI with AI

Now use your AI coding assistant to configure AWS CLI with your credentials.

### Create a Named Profile

| Natural Language (say this to your AI agent) | CLI Command |
|---------------------------------------------|-------------|
| "Configure AWS CLI with a new profile named 'landing-deployer' using region us-east-2" | `aws configure --profile landing-deployer` |

When prompted, enter:

```
AWS Access Key ID: [paste your access key]
AWS Secret Access Key: [paste your secret key]
Default region name: us-east-2
Default output format: json
```

### Verify Configuration

| Natural Language | CLI Command |
|-----------------|-------------|
| "Test my AWS credentials are working" | `aws sts get-caller-identity --profile landing-deployer` |
| "List my AWS profiles" | `aws configure list-profiles` |
| "Show my current AWS configuration" | `aws configure list --profile landing-deployer` |

**Expected output:**
```json
{
    "UserId": "AIDA...",
    "Account": "123456789012",
    "Arn": "arn:aws:iam::123456789012:user/landing-page-deployer"
}
```

### Set as Default Profile (Optional)

| Natural Language | CLI Command |
|-----------------|-------------|
| "Set landing-deployer as my default AWS profile" | `export AWS_PROFILE=landing-deployer` |
| "Make this permanent in my shell" | Add `export AWS_PROFILE=landing-deployer` to `~/.zshrc` or `~/.bashrc` |

---

## 5. Deploy Infrastructure with AI

Use your AI coding assistant to set up the required AWS infrastructure.

### Step 5.1: Create ECR Repository

| Natural Language | CLI Command |
|-----------------|-------------|
| "Create an ECR repository named 'my-landing-page' in us-east-2" | `aws ecr create-repository --repository-name my-landing-page --region us-east-2 --profile landing-deployer` |
| "Show me the ECR repository URI" | `aws ecr describe-repositories --repository-names my-landing-page --region us-east-2 --profile landing-deployer --query 'repositories[0].repositoryUri' --output text` |

**Save the repository URI** - you'll need it for pushing images:
```
123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page
```

### Step 5.2: Create App Runner IAM Role

App Runner needs permission to pull images from ECR.

| Natural Language | CLI Command |
|-----------------|-------------|
| "Create an IAM role for App Runner to access ECR" | See commands below |

**Create the trust policy file:**

```
"Create a file called trust-policy.json with the App Runner trust relationship"
```

Content for `trust-policy.json`:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "build.apprunner.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

| Natural Language | CLI Command |
|-----------------|-------------|
| "Create the App Runner ECR access role" | `aws iam create-role --role-name AppRunnerECRAccessRole --assume-role-policy-document file://trust-policy.json --profile landing-deployer` |
| "Attach ECR read policy to the role" | `aws iam attach-role-policy --role-name AppRunnerECRAccessRole --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess --profile landing-deployer` |
| "Get the role ARN" | `aws iam get-role --role-name AppRunnerECRAccessRole --query 'Role.Arn' --output text --profile landing-deployer` |

**Save the role ARN** - you'll need it for App Runner:
```
arn:aws:iam::123456789012:role/AppRunnerECRAccessRole
```

---

## 6. Deploy Application with AI

### Step 6.1: Build Production Docker Image

| Natural Language | CLI Command |
|-----------------|-------------|
| "Build the production Docker image tagged as my-landing-page:latest" | `docker build -t my-landing-page:latest .` |
| "Verify the image was built" | `docker images my-landing-page` |

### Step 6.2: Tag Image for ECR

| Natural Language | CLI Command |
|-----------------|-------------|
| "Tag my image for ECR" | `docker tag my-landing-page:latest 123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page:latest` |

*Replace `123456789012` with your actual AWS account ID.*

### Step 6.3: Authenticate Docker with ECR

| Natural Language | CLI Command |
|-----------------|-------------|
| "Log Docker into my ECR registry" | `aws ecr get-login-password --region us-east-2 --profile landing-deployer \| docker login --username AWS --password-stdin 123456789012.dkr.ecr.us-east-2.amazonaws.com` |

**Expected output:** `Login Succeeded`

### Step 6.4: Push Image to ECR

| Natural Language | CLI Command |
|-----------------|-------------|
| "Push my landing page image to ECR" | `docker push 123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page:latest` |
| "Verify the image is in ECR" | `aws ecr describe-images --repository-name my-landing-page --region us-east-2 --profile landing-deployer` |

### Step 6.5: Deploy to App Runner

| Natural Language | CLI Command |
|-----------------|-------------|
| "Create an App Runner service for my landing page" | See command below |

**Full deployment command:**

```bash
aws apprunner create-service \
  --service-name my-landing-page \
  --source-configuration '{
    "AuthenticationConfiguration": {
      "AccessRoleArn": "arn:aws:iam::123456789012:role/AppRunnerECRAccessRole"
    },
    "AutoDeploymentsEnabled": false,
    "ImageRepository": {
      "ImageIdentifier": "123456789012.dkr.ecr.us-east-2.amazonaws.com/my-landing-page:latest",
      "ImageRepositoryType": "ECR",
      "ImageConfiguration": {
        "Port": "3000"
      }
    }
  }' \
  --instance-configuration '{
    "Cpu": "0.25 vCPU",
    "Memory": "0.5 GB"
  }' \
  --region us-east-2 \
  --profile landing-deployer
```

**Cost-optimized settings:**
- CPU: 0.25 vCPU (minimum, ~$5/month)
- Memory: 0.5 GB (minimum for Next.js)

### Step 6.6: Wait for Deployment

| Natural Language | CLI Command |
|-----------------|-------------|
| "Check the status of my App Runner deployment" | `aws apprunner describe-service --service-arn <service-arn> --region us-east-2 --profile landing-deployer --query 'Service.Status'` |
| "Get my App Runner service URL" | `aws apprunner describe-service --service-arn <service-arn> --region us-east-2 --profile landing-deployer --query 'Service.ServiceUrl' --output text` |

**Deployment takes 2-5 minutes.** Status progression:
1. `OPERATION_IN_PROGRESS` - Creating service
2. `RUNNING` - Service is live!

---

## 7. Verify & Monitor

### Check Your Live Site

| Natural Language | CLI Command |
|-----------------|-------------|
| "Open my deployed landing page in the browser" | Open `https://<service-id>.<region>.awsapprunner.com` |
| "Get the full URL of my App Runner service" | `aws apprunner describe-service --service-arn <arn> --query 'Service.ServiceUrl' --output text --profile landing-deployer` |

### View Logs

| Natural Language | CLI Command |
|-----------------|-------------|
| "Show me the logs from my App Runner service" | `aws logs tail /aws/apprunner/my-landing-page/service --follow --profile landing-deployer` |
| "Show me the last 50 log entries" | `aws logs tail /aws/apprunner/my-landing-page/service --since 1h --profile landing-deployer` |

### Monitor Costs

| Natural Language | CLI Command |
|-----------------|-------------|
| "Show me my current AWS costs" | `aws ce get-cost-and-usage --time-period Start=2024-01-01,End=2024-01-31 --granularity MONTHLY --metrics BlendedCost --profile landing-deployer` |

Or check the AWS Console: https://console.aws.amazon.com/cost-management/

---

## 8. Clean Up Resources

**Important:** Delete resources when not in use to avoid charges.

### Delete App Runner Service

| Natural Language | CLI Command |
|-----------------|-------------|
| "Delete my App Runner service" | `aws apprunner delete-service --service-arn <service-arn> --region us-east-2 --profile landing-deployer` |
| "Confirm the service was deleted" | `aws apprunner list-services --region us-east-2 --profile landing-deployer` |

### Delete ECR Repository

| Natural Language | CLI Command |
|-----------------|-------------|
| "Delete my ECR repository and all images" | `aws ecr delete-repository --repository-name my-landing-page --region us-east-2 --force --profile landing-deployer` |

### Delete IAM Role (Optional)

| Natural Language | CLI Command |
|-----------------|-------------|
| "Detach the policy from App Runner role" | `aws iam detach-role-policy --role-name AppRunnerECRAccessRole --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess --profile landing-deployer` |
| "Delete the App Runner ECR access role" | `aws iam delete-role --role-name AppRunnerECRAccessRole --profile landing-deployer` |

---

## Quick Reference Card

### One-Time Setup (do once)

| Step | Natural Language |
|------|-----------------|
| 1 | "Install AWS CLI using Homebrew" |
| 2 | "Configure AWS CLI with profile 'landing-deployer' using region us-east-2" |
| 3 | "Create ECR repository named 'my-landing-page'" |
| 4 | "Create IAM role for App Runner to access ECR" |

### Deploy (repeat for each update)

| Step | Natural Language |
|------|-----------------|
| 1 | "Build the production Docker image" |
| 2 | "Tag the image for ECR" |
| 3 | "Log Docker into ECR" |
| 4 | "Push the image to ECR" |
| 5 | "Deploy to App Runner" (first time) or "Update App Runner with new image" |

### Monitor

| Task | Natural Language |
|------|-----------------|
| Check status | "What's the status of my App Runner service?" |
| View logs | "Show me the App Runner logs" |
| Get URL | "What's my App Runner service URL?" |

### Clean Up

| Task | Natural Language |
|------|-----------------|
| Stop charges | "Delete my App Runner service and ECR repository" |

---

## Troubleshooting

### Common Issues

| Problem | Natural Language to Fix |
|---------|------------------------|
| "Access Denied" errors | "Check if my AWS credentials are valid" |
| Docker login fails | "Re-authenticate Docker with ECR" |
| App Runner stuck in OPERATION_IN_PROGRESS | "Check App Runner service events for errors" |
| Image push fails | "Verify ECR repository exists and I have permissions" |
| Service won't start | "Show me the App Runner logs to debug" |

### Debug Commands

| Natural Language | CLI Command |
|-----------------|-------------|
| "Show me detailed App Runner service info" | `aws apprunner describe-service --service-arn <arn> --profile landing-deployer` |
| "List all my App Runner services" | `aws apprunner list-services --region us-east-2 --profile landing-deployer` |
| "Show App Runner service events" | `aws apprunner list-operations --service-arn <arn> --profile landing-deployer` |

---

## Cost Breakdown

### Estimated Monthly Costs (Low Traffic)

| Service | Configuration | Monthly Cost |
|---------|--------------|--------------|
| App Runner | 0.25 vCPU, 0.5 GB | ~$5 |
| ECR Storage | < 1 GB | ~$0.10 |
| Data Transfer | < 1 GB | ~$0.09 |
| **Total** | | **~$5-6/month** |

### Cost Optimization Tips

1. **Use minimum instance size** (0.25 vCPU, 0.5 GB) for landing pages
2. **Enable auto-pause** if traffic is sporadic
3. **Delete unused resources** when not actively using
4. **Monitor with Cost Explorer** to catch unexpected charges

---

## Next Steps

After deploying:

1. **Add a custom domain** - Configure Route 53 or your DNS provider
2. **Enable HTTPS** - App Runner provides free SSL certificates
3. **Set up monitoring** - Configure CloudWatch alarms for errors
4. **Automate deployments** - Create a deployment script or CI/CD pipeline

---

**Need help?** Tell your AI agent:
```
"I'm getting this AWS error: [paste error]. Help me fix it."
```
