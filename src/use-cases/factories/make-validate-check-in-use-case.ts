import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-in-repository'
import { ValidateCheckInUseCase } from '../validate-check-in'

export function makeValidateCheckInsUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new ValidateCheckInUseCase(checkInsRepository)

  return useCase
}
