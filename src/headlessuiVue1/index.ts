import { getComponentsMap, getPropsMap } from './mapping'
// import directives from '../directives.json'

export function headlessuiVue1() {
  return {
    uiName: '@headlessui/vue',
    lib: '@headlessui/vue',
    map: getPropsMap(),
  }
}

export function headlessuiVue1Components() {
  return {
    map: getComponentsMap(),
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: true,
    lib: '@headlessui/vue',
    // directives: directives.headlessuiVue1,
  }
}
