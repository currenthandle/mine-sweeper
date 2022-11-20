import data from '../../public/neighborTransforms.json'
import { neighborTransformsValidator } from './validators'

const neighborTransforms = (() => {
  const neighborTransforms = neighborTransformsValidator.parse(data.data)
  return neighborTransforms
})()

export default neighborTransforms
