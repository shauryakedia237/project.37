class Form {
    constructor() {
        this.title = createElement('h1');
        this.title2 = createElement('h1');
        this.input1 = createInput("Name ");
        this.input2 = createInput("Option No.");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
      }

    hide(){
        
    }

    display(){
        this.title.html("Quizzer");
        this.title.position(350, 0);

        this.question.html("Question:- What starts and ends with the letter 'E', but only has 1 letter? ");
        this.question.position(150,80);

        this.option1.html("1: Everyone");
        this.option1.position(150,100);

        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.option3.html("3: E");
        this.option3.position(150,140);

        this.input1.position(150,230);
        this.input2.position(300,230);
        this.button.position(450,230);
    
    }

}