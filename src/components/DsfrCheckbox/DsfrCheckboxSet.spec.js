import { OhVueIcon as DsfrIcon } from 'oh-vue-icons'
import { fireEvent, render } from '@testing-library/vue'

import DsfrCheckboxSet from './DsfrCheckboxSet.vue'

describe('DsfrCheckboxSet', () => {
  it('should render a group of checkboxes in fieldset', () => {
    // Given
    const firstLabelText = 'Premier label'
    const firstHintText = 'Premier indice'
    const secondLabelText = 'Deuxième label'
    const secondHintText = 'Deuxième indice'
    const thirdLabelText = 'Troisième label'
    const thirdHintText = 'Troisième indice'
    const options = [
      {
        id: '1',
        label: firstLabelText,
        checked: false,
        hint: firstHintText,
        name: '1',
      },
      {
        id: '2',
        label: secondLabelText,
        checked: false,
        hint: secondHintText,
        name: '2',
      },
      {
        id: '3',
        label: thirdLabelText,
        checked: false,
        hint: thirdHintText,
        name: '3',
      },
    ]
    const legendText = "Légende de l'ensemble des champs"

    // When
    const { getByText, getAllByTestId } = render(DsfrCheckboxSet, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        legend: legendText,
        errorMessage: 'Message d’erreur',
        options,
      },
    })

    // Then
    expect(getByText(firstLabelText)).toBeInTheDocument()
    expect(getAllByTestId('t-checkbox')).toHaveLength(3)
  })

  it('should render a group of checkboxes in fieldset', async () => {
    // Given
    const firstLabelText = 'Premier label'
    const firstHintText = 'Premier indice'
    const secondLabelText = 'Deuxième label'
    const secondHintText = 'Deuxième indice'
    const thirdLabelText = 'Troisième label'
    const thirdHintText = 'Troisième indice'
    const options = [
      {
        id: '1',
        name: 'name1',
        label: firstLabelText,
        hint: firstHintText,
      },
      {
        id: '2',
        name: 'name2',
        label: secondLabelText,
        hint: secondHintText,
      },
      {
        id: '3',
        name: 'name3',
        label: thirdLabelText,
        hint: thirdHintText,
      },
    ]
    const legendText = "Légende de l'ensemble des champs"

    // When
    const { getByText, getByTestId } = render(DsfrCheckboxSet, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
        legend: legendText,
        options,
        validMessage: 'Message d’erreur',
        modelValue: ['name3'],
      },
    })

    const firstLabelEl = getByText(firstLabelText)
    const secondLabelEl = getByText(secondLabelText)
    const firstInput = getByTestId('input-checkbox-1')
    const secondInput = getByTestId('input-checkbox-2')
    await fireEvent.click(firstLabelEl)
    await fireEvent.click(secondLabelEl)
    await fireEvent.click(secondLabelEl)

    // Then
    expect(firstInput).toBeInTheDocument()
    expect(firstInput).toHaveAttribute('name', 'name1')
    expect(firstInput.checked).toBe(true)
    expect(secondInput.checked).toBe(false)
  })

  it('should render no checkboxes', async () => {
    // Given
    // When
    const { container } = render(DsfrCheckboxSet, {
      global: {
        components: {
          DsfrIcon,
        },
      },
      props: {
      },
    })
    const checkboxes = container.querySelector('.fr-fieldset__content')

    // Then
    expect(checkboxes.firstElementChild).toBe(null)
  })
})
