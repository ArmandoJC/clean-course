(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) { }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,

        ) { }
    }

    class InputEvents {
        constructor() { }

        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    interface inputElement {
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string,
    }

    class InputElement {
        public element: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor( id: string, value:string, placeholder:string ) {
            this.element = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }


    //? Idea para la nueva clase InputElement

    // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()