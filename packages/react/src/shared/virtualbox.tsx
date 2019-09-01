import React from 'react'
import pascalCase from 'pascal-case'
import {
  registerFormField,
  IComponentClassWithStyleComponent,
  IFunctionComponentWithStyleComponent
} from './core'
import { SchemaField } from '../decorators/markup'
import { registerVirtualboxFlag } from '../utils'
import { FormField } from '../state/field'
import { IFieldProps } from '../type'
import { ISchema } from '@uform/types'

export type TVirtualBoxProps = React.PropsWithChildren<{
  name?: string
  render?: (fieldProps: IFieldProps) => string | JSX.Element | null
}>

export const createVirtualBox = <P extends unknown>(
  name: string,
  component:
    | IFunctionComponentWithStyleComponent<IFieldProps>
    | IComponentClassWithStyleComponent<IFieldProps>,
  isController?: boolean
) => {
  registerVirtualboxFlag(name)
  registerFormField(
    name,
    class extends React.PureComponent<IFieldProps | ISchema['x-props']> {
      public static displayName = 'VirtualBoxWrapper'

      public render() {
        const { schema, schemaPath, path, getOrderProperties } = this.props
        const parentPath = path.slice(0, path.length - 1)
        const properties = getOrderProperties(schema)
        const children = properties.map(({ key }) => {
          const newPath = parentPath.concat(key)
          const newName = newPath.join('.')
          const newSchemaPath = schemaPath.concat(key)
          return (
            <FormField
              key={newSchemaPath}
              name={newName}
              path={newPath}
              schemaPath={newSchemaPath}
            />
          )
        })
        return React.createElement(
          component,
          isController ? this.props : schema['x-props'],
          children
        )
      }
    },
    true
  )

  const VirtualBox = ({
    children,
    name: fieldName,
    render,
    ...props
  }: P & TVirtualBoxProps) => (
    <SchemaField
      type="object"
      name={fieldName}
      x-component={name}
      x-props={props}
      x-render={render}
    >
      {children}
    </SchemaField>
  )

  if (component.defaultProps) {
    VirtualBox.defaultProps = component.defaultProps
  }

  VirtualBox.displayName = pascalCase(name)

  return VirtualBox
}

export const createControllerBox = <P extends unknown>(
  name: string,
  component:
    | IFunctionComponentWithStyleComponent<IFieldProps>
    | IComponentClassWithStyleComponent<IFieldProps>
) => createVirtualBox<P>(name, component, true)

export const FormSlot = ({ name, children }) => {
  return (
    <SchemaField
      type="object"
      name={name}
      x-component="slot"
      renderChildren={children}
    />
  )
}
