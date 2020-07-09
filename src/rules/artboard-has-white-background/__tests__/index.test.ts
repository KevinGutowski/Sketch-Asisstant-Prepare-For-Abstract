import { resolve } from 'path'
import { testRuleInAssistant } from '@sketch-hq/sketch-assistant-utils'
import { artboardHasWhiteBackground } from '../'
import Assistant from '../../../'

test('artboard-has-white-background', async () => {
  const { violations, ruleErrors } = await testRuleInAssistant(
    resolve(__dirname, './lorem-ipsum.sketch'),
    Assistant,
    artboardHasWhiteBackground.name,
  )
  expect(violations).toHaveLength(1)
  expect(ruleErrors).toHaveLength(0)
})
