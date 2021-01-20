terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.20"
    }
  }
}

provider "aws" {
  access_key = var.aws-access-key
  secret_key = var.aws-secret-access-key
  region     = var.aws-region
}
