import { OhVueIcon as DsfrIcon } from 'oh-vue-icons'
import { fireEvent, render } from '@testing-library/vue'

import { spy } from '@/../tests/unit/test-utils.js'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrCallout from './DsfrCallout.vue'

describe('DsfrCallout', () => {
  it('should display a callout without a button', () => {
    const title = 'Titre de la mise en avant'
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'

    const { getByText } = render(DsfrCallout, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        title,
        content,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)

    expect(titleEl).toHaveClass('fr-callout__title')
    expect(contentEl).toHaveClass('fr-callout__text')
  })

  it('should display a callout with button and icon', async () => {
    const onClick = spy()
    const label = 'Label bouton'
    const title = 'Titre de la mise en avant'
    const icon = 'ri-information-line'
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dol'

    const { container, getByText } = render(DsfrCallout, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        title,
        content,
        button: {
          onClick,
          label,
        },
        icon,
      },
    })

    const titleEl = getByText(title)
    const contentEl = getByText(content)
    const buttonEl = container.querySelector('.fr-btn')

    await fireEvent.click(buttonEl)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(titleEl).toHaveClass('fr-callout__title')
    expect(contentEl).toHaveClass('fr-callout__text')
  })
})
