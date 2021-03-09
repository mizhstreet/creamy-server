variable "cluster-id" {
  type = string
}

variable "engine" {
  default = "redis"
  type    = string
}

variable "engine-version" {
  default = "4.0.10"
  type    = string
}


variable "node-type" {
  default = "cache.t2.micro"
  type    = string
}

variable "num-cache-nodes" {
  default = 1
  type    = number
}

variable "parameter-group-name" {
  default = "default.redis4.0"
  type    = string
}

variable "security-group-ids" {
  type = list(string)
}

variable "subnet-group-name" {
  type = string
}
