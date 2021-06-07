<template>
  <div class="home">
      <div id="tolist">
        <h1>To do List</h1>

        <div v-if="!isEditing" style="margin-bottom: 5vh;">
          <input type="text" v-model="currentInput" v-on:keyup.enter="storeList" placeholder="What's need to be done?"/>
          <input type="submit" value="Add" v-on:click="storeList"/>
        </div>

        <div v-else>
          <input type="text" v-model="currentInput" v-on:keyup.enter="updateList"/>
          <input type="submit" value="Update" v-on:click="updateList"/>
        </div>

        <ul>
            <li v-for="(list, index) in lists"  v-bind:class="{done: list.done}">
              <input type="checkbox" value="index" v-model="list.done" :checked="list.done" v-on:click="beDone(index)">
              <span style="width: 65%; text-align: left;"  > {{ list.name }}</span>
              <div style="width: 35%;">
                <button @click="editList(index, list.name)">Edit</button>
                <button @click="deleteList(index)">Delete</button>
              </div>
              
            </li>
        </ul>
        

      </div>
    </div>
</template>

<script>
export default {
  name: 'tolist',
  data () {
    return{
        selectedIndex: null,
        isEditing: false,
        currentInput: '',
        lists: [ ],
    }
  },
  methods: {
        storeList(){
            //nếu không tìm thấy item trong list = currentInput -> nó đang sai, thì đẩy currentInput vô lists
            if(!this.lists.find(item => item.name === this.currentInput))
            {   
                if(this.currentInput !== ''){
                    this.lists.push({
                        name: this.currentInput,
                        done: false,
                        count: 0
                    })
                    this.currentInput = ''
                }
                else{
                    alert("Please fill out this field!")
                }
            }
            else{
                alert("Có rồi á á")
            }
            
        },
        beDone(index){
            if(this.lists[index].count % 2 != 0){
                this.lists[index].done = true
            }
            else{
                this.lists[index].done = false
            }
        },
        editList(index, listName){
            this.currentInput = listName
            this.selectedIndex = index
            this.isEditing = true
        },
        updateList(){
            if(!this.lists.find(item => item.name === this.currentInput))
            {
                //alert(this.selectedIndex)
                if(this.currentInput !== ''){
                    this.lists[this.selectedIndex]={
                        name: this.currentInput,
                        count: 0,
                        done: false,
                    
                    }
                    this.isEditing = false
                }
                else{alert("Please fill out this field!")}
            }
            else{
                alert("Có rồi á á")
            }
            
        },
        deleteList(index){
            this.lists.splice(index, 1)
        },
        

    },
  
}
</script>



<style>

.home{
    display: flex; 
    align-items: center;
    justify-content: center;
}
#tolist{
    margin: auto;
    width: 600px;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.575);
    text-align: center;
    color: #645ce4;
}
.home h1{
    margin: 20px;
    text-align: center;
    color: #645ce4;
}
.home ul{
    padding-inline-start: 0;
}
.home li{
    list-style: none;
    margin: 20px 35px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #e45e;
    font-size: 1.1rem;
    border-radius: 5px;
    transition: 0.2s;
}
.home li:hover{
    transform: translateY(-2px);
}

.home span{
    margin: 0;
    padding: 0;
}
input[type = 'text']{
    color: #645ce4;
    margin: auto;
    width: 65%;
    font-size: 1.1rem;
    padding: 10px;
    border-radius: 5px;
    outline: none;
}
.home input[type = 'submit']{
    font-size: 1.1rem;
    background-color: #197fff;
    width: 20%;
    padding: 10px;
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
}
.home input[type = 'submit']:hover{
    background-color: #e45e;
}
.home input[type = 'checkbox']{
    width:20px;
    height:20px;
    margin-right: 10px;
    cursor: pointer;
}
.home button{
    background-color: white;
    color: #645ce4;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: 0.3s;
}
.home button:hover{
    background-color: #197fff;
    color: white;
}
.home .done{
    color: rgb(211, 211, 211);
    text-decoration: line-through;
    background-color: #00ff73;
}
</style>
