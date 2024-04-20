import React from "react";

const ArticlesListPage = () => {
  return (
    <div className="bg-sky-700 h-full text-white">
      <div className="flex sm:flex-row flex-col justify-self-center pt-12 pl-24 grid-cols-2 grid-flow-row gap-2">
        <div className="flex sm:flex-row flex-col justify-self-center pt-6">
          <img
            className="rounded-full mt-8 h-36 w-36"
            alt="profilepic"
            src="data:image/png;base64,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"
          />

          <div class="p-6">
            <h1 class="text-2xl font-bold mb-2">Atomcamp</h1>
            <h2 class="text-lg font-semibold mb-4">Full Stack Developer</h2>
            <p class="text-base">
              2024
              
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col justify-self-center pt-6">
          <img
            className="mt-8 h-36 w-36 rounded-full"
            alt="profilepic"
            src="./codesoft.png"/>

          <div class="p-6">
            <h1 class="text-2xl font-bold mb-2">Codesoft</h1>
            <h2 class="text-lg font-semibold mb-4">Frontend Developer</h2>
            <p class="text-base">
              2023
              
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center mt-16">
      <h2 class="text-xl font-semibold mb-4">
        Let us create awesome products!
      </h2>
      <p class="text-base text-center">
      I am always  open to collaborate on new projects or contribute to existing ones.<br/> Feel free to reach out and
          Feel free to contact me if you need any help or want <br /> to collaborate on an  interesting project.
      </p>
    </div>

    <div className="flex flex-col items-center justify-center border-t-2 border-b-2 bg-sky-900 mt-8 border-white">
      <h2 class="text-lg font-semibold mb-4 mt-4">Contact Me</h2>

      <div className="flex sm:flex-row flex-col justify-center items-center mb-4 gap-4">
        <div className="flex">
          Github{" "}
          <a href="https://github.com/imanfatim" class="px-2">
            {" "}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
              alt="Left Arrow"
              class="h-6 w-6"
            />{" "}
          </a>
        </div>
       
        <div className="flex">
          LinkedIn{" "}
          <a href="https://www.linkedin.com/in/iman-fatima-756bb5278/" class="px-2">
            {" "}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAk1BMVEX///8wRlQREiSOjo4AAAs9T1wnP053g4rM0NIKLkC/xMja3t8fOkqAipEALD+jqa4AKDybo6kXNUYAAADU2Nrs7u/l5+jz8/RTYm1HWGSNl56TnKNmcnsKCyAAABcAABuxtrtteoJcanQAGzNOTlghIjAXFyY9PkkAABIyMjp+foVxcXhXV15HR1NnZ2+ZmZ1ISEma9ZpxAAADBklEQVR4nO2aC3OiMBCAodVQLG95CSrI2fNOufb+/687BJQAp03sbcjM7TfW6QzgfNkElmyiKAiCIAiCIAiCIAiCIAiCIIII/AUXfgSuFJqx6uk8qLEZgCoFpmOovBDDgdQKC49bqUaPQzCnOXnM6RytVyCpNX/XdVYxzHjPv+CkqoYN4RTFbecR3WmwWpq7zOpzOecyCmFC5Vttk4vcr3hloDrtJb0MRMsHkEqa3jN2vBfumgs9F0CqaFo8576NXudN/xUAUu1PcwdKidZtc+CkNP4rNZRiZCqpVDNHaPnEUr6qG0Osy6mTdV8wTtaGObWUEq6GVhJIKQEh8kmNYiWFlBKoRD6p6nVZQiklIfJJJbp8kbJ7TnJImX0nKaRsR5VOKunmqe1TdHopKk5e2sx7Jpei4mS4SlRn56mlXCpO50lnnXEmlkqNvlM1WagyjkApc3wk7eJ0nZyHMREn9ZeSgNvFSe+OhnNPmJQ1qggk1jhOZ4KVKClv1Ht2d985/SiGiRipcenkVpxoYKWIM6ycUDn4280CFKgUUYdOVA4mt4tikFLeqOBid33n3CnUAUqpxWg8UbnlXvEQUMocOrldnLy7BU1AqSFpLwfLITXMwTJIUbnl02KmKKmU4ZkpWoqKk/V50VeMFEtuES11OwdPJ0XNg9kWXARIUTmYKU4ipLjjJECKmt9ZrItl0FKsObjHDlaKOQfTtGszBEhqPL9jwW+uIGsYpy5Od94zh4TtiipHM3icujiRgmnzRl6hXVdGIdbbo4IqaBLW/RseubYDZLl98aXVdi+HcKpeiB/cv3GGf+mZkWD1cKwMFWxfSaQ9utdlB7gDJ3K7kcsM0T0beA+Vu17xOa12IA+oAaH/woEPNpgQBEEQBEEQBEEQBEEQBEEQ5D/lWUKUmYQoTxJSS23qT/v1tNlus/a/zfkzjVS2f/t+mGXZcp9tf2Szn8fTfr9cbrfLQ7ksf2VTSZVvlUh5Or6Xx/3p4/j7lL/nZbk4PX8cDv8wVBvq7/J9PVYfaDrmDyfjRCgQCN3HAAAAAElFTkSuQmCC"
              alt="Left Arrow"
              class="h-6 w-6"
            />{" "}
          </a>
        </div>
        
      </div>
    </div>
    <div className="bg-sky-900 p-2 pl-8">
      <text>© 2024 aribamemon All rights reserved.</text>
    </div>
    </div>
  );
};

export default ArticlesListPage;