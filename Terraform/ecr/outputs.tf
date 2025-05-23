output "ecr_repository_url" {
  description = "The URL of the ECR repository"
  value       = aws_ecr_repository.portfolio_ecr.repository_url
}

output "ecr_repository_name" {
  description = "The name of the ECR repository"
  value       = aws_ecr_repository.portfolio_ecr.name
}