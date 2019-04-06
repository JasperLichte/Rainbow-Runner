export default class DomHelper {

  public static head(): HTMLHeadElement {
    return document.getElementsByTagName('head')[0];
  }

  public static element(tag: string): ({}) => (string) => HTMLElement {
    const el = document.createElement(tag);
    return (attribs: {}) => {
      for (const attr in attribs) {
        if (!attr || !(attribs[attr])) continue;
        el.setAttribute(attr, attribs[attr]);
      }
      return (content: string) => {
        el.appendChild(document.createTextNode(content));
        return el;
      };
    }
  }

  public static insertAsFirst(target: HTMLElement, newChild: HTMLElement): void {
    target.insertBefore(
      newChild,
      target.firstChild
    );
  }

}
