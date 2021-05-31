1. Components - Templates
- a resuable piece of code or template -> we use in different review instances (multiple vue instances). Instead of write separately for many vue instances ==> Create a component which we can inject into each one. 
- Create component: 
```Vue.component('name_of_this_component', {function_can_pass_through_different_propeties})```

=> Usage
```Vue.component('hello', {
   //template which is renered when we use component, it is string to pass through HTML -> output to the Dom
   //How to output: -> out put this name of the component in tag format in index.html ==> <hello></hello> (just seeing the template in the inspect)
   
   template:'<p>Hello, I'm a resuable {{ name }} component </p>
   <button v-on:click="function_name">Hehe</button>
   ',
   
   //data is not an object directly, it's a function -> return an object. Easily to call this function to return fresh copy of this data. 
   //Then, output {{ }} up to the template like in HTML. 
   //Use function: to change independently among multiple instances. 
   
   data: function(){
   	return {
   	    name: 'Hehe',
   		
   	}
   }
   
   methods: {
      function_name: function(){
      	   //Write as well as vue instance ! 
      }
   }
   //Note: we can also create an object outside the component with data, name....., and then -> just return object_name!	
   //(for all multiple instances)
});
```
2. Refs 
- an element and access data about that element -> refs
- get all the information about this element (eg: input tag)
- whatever elemet we want to referennce "ref" -> access this element inside vue
- eg: ... ref="hehe"
```
   methods:{
   	readRefs: function(){
   	   this.$refs.tag_name.properties
   	   //eg: this.$refs.input.value -> see the value of this input tag
   	   this.data_name = this.$ref.input.value... like two way data binding
   	}
   }
```
3. The Vue CLI (command line interface)
- Create a dev environment workflow with webpack -> setting up a vue project using the vue CLI 
 + Use ES^6 features 
 + Compile and minify our JS into 1 file -> reducing our loading
 + Use single file templates 
 + Compile everything on machine, not in a browser
 + Make a live reload dev server
- Install nodejs to use npm -> install vue CLI
- github vue-cli: 
https://github.com/vuejs/vue-cli -> installation 
https://www.npmjs.com/package/vue-cli
- Navigate into the directory which want to create the project : cd/....
- Create project: 
```
vue init <template_name> <project_name> or vue create my-project
```
- Then we can see project name, project description, author, license, use sass -> It's done now
- To get started:
```
   cd <project-name>
   npm install
   npm run dev
```
- Note: We can find the current available templates include like webpack, webpack-simple... on the website.
- Open up the file has just created: We had:
   + index.html: file that served up to us
   + When we compile our files for production -> we will get a distribution folder which we can use to push to server.
   + package-lock.json: contains infor about our project 
   + webpack.config.js: bundling -> allow to use ES6,...
   + assets: photos... right here
   + main.js: kicks in when we run app -> control everything -> can use ES6 features. Import App.vue right here too. 
   + App.vue: this is our root component -> be rendered to main.js
   -> this is a vue file : is just an extension of a component 
   We can access data form object in script tag, this is the component as well, all we can also make component by Vue.component('', {}); in main.js file. (Need to export object) (export default.... )
   

- ROOT COMPONENT: the component that lives at the very top of our application

- On the .vue file, we have:
```
<script>
export default{
   name: '<the name of the component(when use nesting component)',
   data: (when use component, data is function Note note!) return to something..
   //data(){return...} = data: function(){return... } 
    
}
</script>
```
- Note: we have to have everything on one div in template because it is single root component. 










