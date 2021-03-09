resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "creamy-server-${var.app-name}-deployment"
}
