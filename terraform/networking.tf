resource "aws_db_subnet_group" "private" {
  name       = "creamy-subnet-group-private"
  subnet_ids = [aws_subnet.creamy-subnet-private-1.id, aws_subnet.creamy-subnet-private-2.id]

  tags = {
    Name = "Private DB Subnet Group"
  }
}

resource "aws_db_subnet_group" "public" {
  name       = "creamy-db-subnet-group-public"
  subnet_ids = [aws_subnet.creamy-subnet-public.id, aws_subnet.creamy-subnet-public-2.id]
}

resource "aws_elasticache_subnet_group" "private" {
  name       = "creamy-redis-subnet-group-private"
  subnet_ids = [aws_subnet.creamy-subnet-private-1.id, aws_subnet.creamy-subnet-private-2.id]
}


resource "aws_internet_gateway" "creamy" {
  vpc_id = aws_vpc.creamy.id
}

resource "aws_route_table_association" "creamy-subnet-public" {
  subnet_id      = aws_subnet.creamy-subnet-public.id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "creamy-subnet-public-2" {
  subnet_id      = aws_subnet.creamy-subnet-public-2.id
  route_table_id = aws_route_table.public.id
}

resource "aws_security_group" "allow-internal-http" {
  name        = "allow-internal-http"
  description = "allow internal http requests"
  vpc_id      = aws_vpc.creamy.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.creamy.cidr_block]
  }
}

resource "aws_security_group" "allow-https" {
  name        = "allow-https"
  description = "allow https requests"
  vpc_id      = aws_vpc.creamy.id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


resource "aws_security_group" "allow-http" {
  name        = "allow-http"
  description = "allow http inbound traffic"
  vpc_id      = aws_vpc.creamy.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-ssh" {
  name        = "allow-ssh"
  description = "allow ssh inbound traffic"
  vpc_id      = aws_vpc.creamy.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-all-outbound" {
  name        = "allow-all-outbound"
  description = "allow all outbound traffic"
  vpc_id      = aws_vpc.creamy.id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-internal-postgresql" {
  name        = "allow-internal-postgresql"
  description = "Allow internal MySQL requests"
  vpc_id      = aws_vpc.creamy.id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.creamy.cidr_block]
  }
}

resource "aws_security_group" "allow-public-postgres" {
  name        = "allow-public-postgres"
  description = "Allow connection to postgres instance from internet"
  vpc_id      = aws_vpc.creamy.id
  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "allow-internal-redis-cluster" {
  name        = "allow-internal-redis"
  description = "Allow internal redis requests"
  vpc_id      = aws_vpc.creamy.id

  ingress {
    from_port   = 6379
    to_port     = 6379
    protocol    = "tcp"
    cidr_blocks = [aws_vpc.creamy.cidr_block]
  }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.creamy.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.creamy.id
  }

  tags = {
    Name = "Public route table"
  }
}


resource "aws_subnet" "creamy-subnet-public" {
  availability_zone = "ap-northeast-1a"
  cidr_block        = "10.0.0.0/24"
  vpc_id            = aws_vpc.creamy.id

  tags = {
    Name = "Book server Subnet (Public)"
  }
}

resource "aws_subnet" "creamy-subnet-public-2" {
  availability_zone = "ap-northeast-1d"
  cidr_block        = "10.0.3.0/24"
  vpc_id            = aws_vpc.creamy.id

  tags = {
    Name = "Book server Subnet (Public)"
  }
}


resource "aws_subnet" "creamy-subnet-private-1" {
  availability_zone = "ap-northeast-1a"
  cidr_block        = "10.0.1.0/24"
  vpc_id            = aws_vpc.creamy.id

  tags = {
    Name = "Book server Subnet (Private)"
  }
}

resource "aws_subnet" "creamy-subnet-private-2" {
  availability_zone = "ap-northeast-1c"
  cidr_block        = "10.0.2.0/24"
  vpc_id            = aws_vpc.creamy.id

  tags = {
    Name = "Book server Subnet (Private) 2"
  }
}

resource "aws_vpc" "creamy" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name = "creamy-demo"
  }
}
