import { createElement } from '@angular/core/src/view/element';

export class Select {
    private el: Element;
    constructor(private srcEle:any, private options:any) {
        let parentEle = this.srcEle.parentElement;
        this.el = document.createElement('ul');
        
        this.options.data.forEach(d => {
            let li = document.createElement('li');
            li.onclick = (e) => this.options.onSelect(d);
            li.innerText = d.value;
            this.el.appendChild(li);
        });

        parentEle.appendChild(this.el);

        this.srcEle.style.display = 'none';
        
    }
    
    getValue() {
        return 123;
    }

    destroy() {
        console.log('destroy');
    }
}
