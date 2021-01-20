module "creamy-db" {
  source = "./postgresql-db"

  apply-immediately      = true
  db-name                = "creamysv"
  db-subnet-group-name   = aws_db_subnet_group.public.id
  identifier             = "creamy-server-db"
  password               = "hoilamgi"
  publicly-accessible    = true
  username               = "mrmbiuzz"
  vpc-security-group-ids = [aws_security_group.allow-public-postgres.id, aws_security_group.allow-internal-postgresql.id]
}
