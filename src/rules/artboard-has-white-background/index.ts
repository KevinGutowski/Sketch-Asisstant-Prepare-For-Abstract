import type { RuleDefinition, RuleContext } from '@sketch-hq/sketch-assistant-types'

const artboardHasWhiteBackground: RuleDefinition = {
  rule: async (context: RuleContext) => {
    const { utils } = context
    for (const artboard of utils.objects.artboard) {
      const presetName = artboard.presetDictionary.name
      if (presetName == 'Gradescope #1') {
        if (!artboard.hasBackgroundColor) {
          utils.report({
            object: artboard,
            message: `Artboard "${artboard.name}" doesn‘t have a white background`,
          })
        } else {
          const backgroundColor = artboard.backgroundColor
          if (
            backgroundColor.alpha != 1 ||
            backgroundColor.blue != 1 ||
            backgroundColor.green != 1 ||
            backgroundColor.red != 1
          ) {
            utils.report({
              object: artboard,
              message: `Artboard "${artboard.name}" doesn‘t have a white background`,
            })
          }
        }
      }
    }
  },
  name: 'artboard-has-white-background',
  title: 'Artboard should have a white background',
  description:
    'Emits a violation when a artboards with the "Gradescope #1" preset doesn‘t have a white background.',
}

export { artboardHasWhiteBackground }
