resource "aws_elasticache_cluster" "default" {
  cluster_id           = var.cluster-id
  engine               = var.engine
  engine_version       = var.engine-version
  node_type            = var.node-type
  num_cache_nodes      = var.num-cache-nodes
  parameter_group_name = var.parameter-group-name
  security_group_ids   = var.security-group-ids
  subnet_group_name    = var.subnet-group-name
}
