module "creamy-db" {
  source                 = "./postgresql-db"
  apply-immediately      = true
  db-name                = "creamy"
  db-subnet-group-name   = aws_db_subnet_group.public.id
  identifier             = "creamy-server-db"
  username               = "creamyryodai"
  password               = "creamyryodai"
  publicly-accessible    = true
  vpc-security-group-ids = [aws_security_group.allow-public-postgresql.id, aws_security_group.allow-internal-postgresql.id]
}

resource "aws_eip" "creamy-server-eip" {
  instance = module.creamy-server.instance-id
}

module "creamy-server" {
  source = "./node-server"

  ami-id               = "ami-011facbea5ec0363b"
  iam-instance-profile = module.creamy-server-codedeploy.iam-instance-profile
  key-pair             = aws_key_pair.creamy-key.key_name
  name                 = "creamy-server"
  subnet-id            = aws_subnet.creamy-subnet-public.id
  vpc-security-group-ids = [
    aws_security_group.allow-http.id,
    aws_security_group.allow-internal-http.id,
    aws_security_group.allow-ssh.id,
    aws_security_group.allow-all-outbound.id
  ]
}

module "creamy-server-codedeploy" {
  source = "./codedeploy-app"

  app-name          = "creamy-server"
  ec2-instance-name = module.creamy-server.name
}


module "redis" {
  source = "./redis-cluster"

  cluster-id         = "creamy-server-redis"
  security-group-ids = [aws_security_group.allow-internal-redis-cluster.id]
  subnet-group-name  = aws_elasticache_subnet_group.private.name
}
