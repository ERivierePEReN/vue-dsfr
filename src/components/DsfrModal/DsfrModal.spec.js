import { OhVueIcon as DsfrIcon } from 'oh-vue-icons'
import { render } from '@testing-library/vue'
import { mount } from '@vue/test-utils'

// import '@gouvfr/dsfr/dist/core/core.module.js'

import DsfrModal from './DsfrModal.vue'

describe('DsfrModal', () => {
  it('should render modal and emit "close" on click on close button', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    const closeBtn = wrapper.find('button.fr-btn--close')

    expect(wrapper.emitted().close).not.toBeTruthy()

    await closeBtn.trigger('click')

    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should render modal', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const { getByText, getByRole, getByLabelText } = render(DsfrModal, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    const modalEl = getByRole('dialog')
    const modalContentEl = getByText(content)
    const labelledByTitleEl = getByLabelText(title)

    expect(modalEl).toBe(labelledByTitleEl)
    expect(modalEl).toHaveClass('fr-modal')
    expect(modalContentEl).toBeInTheDocument()
    expect(modalContentEl).toHaveClass('fr-modal__content')
  })

  it('should render modal and emit "close" on click on escape', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const wrapper = mount(DsfrModal, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        opened: true,
        title,
      },
      slots: {
        default: content,
      },
    })

    expect(wrapper.emitted().close).not.toBeTruthy()

    await wrapper.trigger('keydown', { keyCode: 27 })

    expect(wrapper.emitted().keydown).toBeTruthy()
    // expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should render modal with role alertdialog', async () => {
    const content = 'Contenu de la modale'
    const title = 'Titre de la modale'

    const { getByText, getByRole } = render(DsfrModal, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        opened: true,
        title,
        isAlert: true,
      },
      slots: {
        default: content,
      },
    })

    getByText('Fermer')
    getByRole('alertdialog')
  })
})
