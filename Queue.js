//Implimenting Queue Data Structure.


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        //Represents pointers for front and back of Queue.
        this.front = null;
        this.back = null;
    }

    //checks if Queue is empty.
    isEmpty(){

    return !this.front;

    }

    //push elements into the Queue
    enqueue(value){
        //create new node with value coming in
        const newNode = new Node(value)

        //Check if Queue is empty
        if(this.isEmpty()){
            //point front and back to new node
            this.front = newNode;
            this.back = newNode;
        }else{
            //que is not empty, push node to back of que
            //point last node to newly created node
            this.back.next = newNode;
            //move back pointer to new node
            this.back = newNode;
        }

       return this.print();

    }


    dequeue() {
        let node = this.front;

        if(!this.isEmpty()){
            this.front = this.front.next;
        }

        if(!this.front){
            this.back = null;
        }

        this.print();

        return node;


    }


    print(){
        let temp = []
       //check if que is empty
       if(this.isEmpty()){
        console.log('Queue is Empty')
       }else{
        let tempArr = [];
        let temp = this.front;

        //iterate through Queue
        while(temp){
            //add value to temp arr
            tempArr.push(temp.value)
            temp = temp.next;
        }

        console.log(tempArr.join(','));
       }

    }

}




let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.dequeue()
q.dequeue()
q.dequeue()