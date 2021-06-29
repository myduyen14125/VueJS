<template>
  <div class="model">
    <button id="modal-btn" class="button" @click="activeModel()">Click Here</button>

    <div id="my-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close">&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div class="modal-body">
          <p>This is my modal</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            repellendus nisi, sunt consectetur ipsa velit repudiandae aperiam
            modi quisquam nihil nam asperiores doloremque mollitia dolor
            deleniti quibusdam nemo commodi ab.
          </p>
        </div>
        <div class="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    activeModel(){
      // Get DOM Elements
      const modal = document.querySelector('#my-modal');
      const modalBtn = document.querySelector('#modal-btn');
      const closeBtn = document.querySelector('.close');

      // Events
      modalBtn.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);
      window.addEventListener('click', outsideClick);

      // Open
      function openModal() {
        modal.style.display = 'block';
      }

      // Close
      function closeModal() {
        modal.style.display = 'none';
      }

      // Close If Outside Click
      function outsideClick(e) {
        if (e.target == modal) {
          modal.style.display = 'none';
        }
      }

    }
  }
}
</script>

<style scoped>
:root {
  --modal-duration: 1s;
  --modal-color: #428bca;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f4f4;
  font-size: 17px;
  line-height: 1.6;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

.button {
  background: #428bca;
  padding: 1em 2em;
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background: #3876ac;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  margin: 10% auto;
  width: 60%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  animation-name: modalopen;
  animation-duration: var(--modal-duration);
}

.modal-header h2,
.modal-footer h3 {
  margin: 0;
}

.modal-header {
  background: var(--modal-color);
  padding: 15px;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.modal-body {
  padding: 10px 20px;
  background: #fff;
}

.modal-footer {
  background: var(--modal-color);
  padding: 10px;
  color: #fff;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.close {
  color: #ccc;
  float: right;
  font-size: 30px;
  color: #fff;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

@keyframes modalopen {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>