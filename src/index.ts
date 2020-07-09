import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { artboardHasWhiteBackground } from './rules/artboard-has-white-background'

const assistant: AssistantPackage = [
  async () => {
    return {
      name: 'Prepare for Abstract',
      rules: [artboardHasWhiteBackground],
      config: {
        rules: {
          [artboardHasWhiteBackground.name]: { active: true },
        },
      },
    }
  },
]

export default assistant
