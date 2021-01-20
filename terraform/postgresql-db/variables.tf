variable "apply-immediately" {
  default = false
  type    = bool
}

variable "db-name" {
  type = string
}

variable "db-subnet-group-name" {
  type = string
}

variable "engine-version" {
  default = "11"
}

variable "identifier" {
  type = string
}

variable "instance-class" {
  default = "db.t2.micro"
  type    = string
}

variable "parameter-group-name" {
  default = "default.postgres11"
  type    = string
}

variable "password" {
  type = string
}

variable "publicly-accessible" {
  type = bool
}

variable "username" {
  type = string
}

variable "vpc-security-group-ids" {
  default = []
  type    = list(string)
}




