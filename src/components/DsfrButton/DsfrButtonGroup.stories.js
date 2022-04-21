import { OhVueIcon as DsfrIcon, addIcons } from 'oh-vue-icons'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons/ri/index.js'

import DsfrButtonGroup from './DsfrButtonGroup.vue'

addIcons(RiCheckboxCircleLine)

export default {
  component: DsfrButtonGroup,
  title: 'Composants/Boutons/Groupe de Boutons - DsfrButtonGroup',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    buttons: {
      control: 'object',
      description: 'Tableau d’objets, chaque objet contiendra les props à passer à DsfrButton',
    },
    inline: {
      control: 'boolean',
      description: 'Indique si le groupe de boutons doit apparaître en empilement horizontal',
    },
    reverse: {
      control: 'boolean',
      description: 'Indique si l’ordre des boutons doit être inversé par rapport au DOM.\n\n *N.B. : Ne fonctionne que si `align` est à `right`*',
    },
    size: {
      control: 'radio',
      options: ['default', 'small', 'medium', 'large'],
      description: 'Indique la taille du groupe de bouton',
    },
    align: {
      control: 'radio',
      options: ['default', 'center', 'right'],
      description: 'Indique l\'alignement du groupe de boutons',
    },
    onClick: { action: 'clicked' },
  },
}

export const GroupeDeBoutons = (args) => ({
  components: {
    DsfrButtonGroup,
    DsfrIcon,
  },
  data () {
    return {
      ...args,
      buttons: args.buttons.map(btn => ({ ...btn, onClick: args.onClick })),
    }
  },
  template: `
    <DsfrButtonGroup
      :buttons="buttons"
      :size="size"
      :align="align"
      :inline="inline"
      :reverse="reverse"
    />
  `,

  mounted () {
    console.log(this.reverse)
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
GroupeDeBoutons.args = {
  dark: false,
  align: 'center',
  inline: false,
  reverse: false,
  size: undefined,
  buttons: [
    {
      label: 'Label 1',
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Label 2',
      secondary: true,
      icon: 'ri-checkbox-circle-line',
    },
    {
      label: 'Label 3',
      icon: 'ri-checkbox-circle-line',
      iconRight: true,
    },
    {
      label: 'Label 4',
      secondary: true,
      icon: 'ri-checkbox-circle-line',
      iconRight: true,
    },
  ],
}
