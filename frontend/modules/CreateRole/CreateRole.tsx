import React from 'react'
import { RoleForm } from "@modules/CreateRole"
import { CardBox } from '@components/cardbox'
const CreateRole = () => {
  return (
    <CardBox className="max-w-2xl mx-auto shadow-2xl">
    <RoleForm />
     {/*add permission form here <PermissionForm /> */}
    </CardBox>
  )
}

export default CreateRole