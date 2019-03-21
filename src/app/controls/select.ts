import { createElement } from '@angular/core/src/view/element';

export class Select {
    private input: Element;
    private menu: Element;
    constructor(private srcEle:any, private options:any) {
        this.menu = document.createElement('ul');
        this.menu.className = 'c-select-menu';

        this.input = document.createElement('input');
        this.input.className = 'c-select-text';

        this.bindEvent();
    }

    private updateMenu(data) {
        Array.from(this.menu.querySelectorAll('li')).forEach(li => li.remove());
        data.forEach(d => {
            let li = document.createElement('li');
            li.onclick = (e) => {
                this.options.onSelect(d);
                this.input.value = d.text;
            };
            li.innerText = d.value;
            this.menu.appendChild(li);
        });
    }

    private bindEvent() {
        let parentEle = this.srcEle.parentElement;
        
        this.updateMenu(this.options.data);
        parentEle.appendChild(this.input);
        parentEle.appendChild(this.menu);

        this.srcEle.style.display = 'none';
    }

    public setData(data) {
        this.updateMenu(data);
    }
    
    getValue() {
        return 123;
    }

    destroy() {
        console.log('destroy');
    }
}
