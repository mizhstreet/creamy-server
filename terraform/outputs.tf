output "creamy-server-private-ip" {
  value = module.creamy-server.private-ip
}

output "creamy-server-public-ip" {
  value = aws_eip.creamy-server-eip.public_ip
}

output "aws-region" {
  value = var.aws-region
}

output "creamy-server-codedeploy-app-name" {
  value = module.creamy-server-codedeploy.app-name
}

output "creamy-server-deployment-bucket-name" {
  value = module.creamy-server-codedeploy.deployment-bucket-name
}

# output "db-address" {
#   value = module.creamy-server-db.address
# }
