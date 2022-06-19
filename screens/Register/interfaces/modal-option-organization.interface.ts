import { Organization } from '../../../api/organization/types'
import { ModalPickerOption } from '../../../interfaces'

export interface ModalOptionOrganization extends ModalPickerOption, Partial<Organization> {}
