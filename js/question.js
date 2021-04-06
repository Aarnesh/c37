class Question{
constructor(){
    this.heading = createElement("h1")
    this.question = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

    this.inputName = createInput("Enter your Name")
    this.inputOption = createInput("Enter the Correct Option")

    this.submit = createButton("Submit")
}

hide(){
    this.inputName.hide()
    this.inputOption.hide()
    this.submit.hide()
}

display(){
    this.heading.position(300,30)
    this.heading.html("Are you the SMARTEST?")

    this.question.position(80,135)
    this.question.html("Q. Who was the first ruler of England? ")

    this.option1.position(140,180)
    this.option1.html("A. Athelstan ")

    this.option2.position(140,200)
    this.option2.html("B.James VI of Scotland ")

    this.option3.position(140,220)
    this.option3.html("C. Queen Elizabeth")

    this.option4.position(140,240)
    this.option4.html("D. King George V")

    this.inputName.position(400,200)
    this.inputOption.position(400,250)

    this.submit.position(400,300)

    this.submit.mousePressed(()=>{
        this.inputName.hide()
        this.inputOption.hide()
        this.submit.hide()

        contestant.name = this.inputName.value()
        contestant.option = this.inputOption.value();

        contestantCount+=1

        contestant.update()
        contestant.updateCount(contestantCount)


           
    })
    

}



}