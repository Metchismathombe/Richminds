function showContainerBox1() {
            document.getElementById('container-box').style.display = 'none';
            document.getElementById('container-box-1').style.display = 'flex';
            document.getElementById('container-box-3').style.display = 'none';
          }
        
          /*
          function showContainerBox1From3() {
            document.getElementById('container-box').style.display = 'none';
            document.getElementById('container-box-1').style.display = 'flex';
            document.getElementById('container-box-3').style.display = 'none';
          }
          */
        
          /*
          function showContainerBox3hide() {
            document.getElementById('container-box').style.display = 'none';
            document.getElementById('container-box-1').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'flex';
            document.getElementById('container-box-4').style.display = 'none';
          }
          */
        
          function showContainerBox3() {

            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'flex';
          }
        
          function showContainerBox4() {
            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'none';
            document.getElementById('container-box-4').style.display = 'flex';
          }

          function showContainerBox5() {
            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'none';
            document.getElementById('container-box-4').style.display = 'none';
            document.getElementById('container-box-5').style.display = 'flex';
          }

          function showContainerBox6() {
            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'none';
            document.getElementById('container-box-4').style.display = 'none';
            document.getElementById('container-box-5').style.display = 'none';
            document.getElementById('container-box-6').style.display = 'flex';
          }

          function showContainerBox7() {
            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'none';
            document.getElementById('container-box-4').style.display = 'none';
            document.getElementById('container-box-5').style.display = 'none';
            document.getElementById('container-box-6').style.display = 'none';
            document.getElementById('container-box-7').style.display = 'flex';
          }

          function showContainerBox8() {
            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'none';
            document.getElementById('container-box-4').style.display = 'none';
            document.getElementById('container-box-5').style.display = 'none';
            document.getElementById('container-box-6').style.display = 'none';
            document.getElementById('container-box-7').style.display = 'none';
            document.getElementById('container-box-8').style.display = 'flex';
          }

          function showAnxiety() {
            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'none';
            document.getElementById('container-box-4').style.display = 'none';
            document.getElementById('container-box-5').style.display = 'none';
            document.getElementById('container-box-6').style.display = 'none';
            document.getElementById('container-box-7').style.display = 'none';
            document.getElementById('container-box-8').style.display = 'none';

            showAnxietyResults();
          }

          
          function showAnxietyResults() {
            document.getElementById('container-box-2').style.display = 'none';
            document.getElementById('container-box-3').style.display = 'none';
            document.getElementById('container-box-4').style.display = 'none';
            document.getElementById('container-box-5').style.display = 'none';
            document.getElementById('container-box-6').style.display = 'none';
            document.getElementById('container-box-7').style.display = 'none';
            document.getElementById('container-box-8').style.display = 'none';
            document.getElementById('Anxiety').style.display = 'block';

            const ElementToDisplay = document.querySelector('.Anxiexty-results-sect');
            setTimeout(() => {
            document.getElementById('Anxiety').style.display = 'none';
            document.querySelector('.home-nav').style.display = 'flex';
            ElementToDisplay.style.display = 'flex';
            },8000);

          }


          /*
          function showContainerBox() {
              document.getElementById('container-box').style.display = 'flex';
              document.getElementById('container-box-1').style.display = 'none';
              document.getElementById('container-box-3').style.display = 'none';
            }
            */
        
                    function toggleCheckbox(checkboxId){
                    let checkbox = document.getElementById(checkboxId);
                    checkbox.checked = !checkbox.checked;
        
                    let associatedDiv = document.querySelector('[for="' + checkboxId + '"] .skin_concern1');
                    associatedDiv.classList.toggle('checked', checkbox.checked);
                    
                    };

                    function toggleRadio(radioId){
                        let radioButton = document.getElementById(radioId);
                        radioButton.checked = !radioButton.checked;

                        // Find the parent container of the radio button
                        let parentContainer = radioButton.parentElement;

                        // Toggle the class 'checked' on the parent container
                        parentContainer.classList.toggle('checked', radioButton.checked);
                    
                    };

                    document.addEventListener('DOMContentLoaded', function() {
                        const Btn = document.getElementById('btn');
                        Btn.addEventListener('click', calculateTotalScore);
                    });
                    

        function calculateTotalScore() {
            let totalScore = 0;

            const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

            radioButtons.forEach(radioButton => {
               
                totalScore += parseInt(radioButton.value);
            });

            displayAnxietyLevel(totalScore);
        }

        const Normal = document.getElementById('AnxietyLevel');
        const AnxietyResponse = document.getElementById('AnxietyResponse');
        const WaysToCope = document.getElementById('waystocope');

        const NormalAnxiety = [
        `<h3 style="color:white;font-weight:700"> Practice relaxation techniques: </h3> <br> Deep breathing, meditation, progressive muscle relaxation, and yoga can all be helpful in managing everyday anxiety.`,
        `<h3 style="color:white;font-weight:700"> Engage in regular physical activity: </h3> <br> Exercise is a great way to reduce stress and improve your mood.`,
        `<h3 style="color:white;font-weight:700"> Maintain a healthy lifestyle: </h3> <br> Eating a balanced diet, getting enough sleep, and limiting caffeine and alcohol can all contribute to better emotional well-being.`,
        `<h3 style="color:white;font-weight:700"> Seek social support: </h3> <br> Talking to friends, family, or a therapist can provide valuable support and help you manage your anxiety.`
    ];

    const MildAnxiety = [
        `<h3 style="color:white;font-weight:700"> Identify and challenge negative thoughts: </h3> <br> Cognitive-behavioral techniques can help you identify unhelpful thinking patterns and replace them with more positive and realistic thoughts.`,
        `<h3 style="color:white;font-weight:700"> Try mindfulness or grounding exercises: </h3> <br>These techniques can help you stay present in the moment and reduce worry about the future.`,
        `<h3 style="color:white;font-weight:700"> Talk to a therapist or counselor: </h3> <br> They can provide additional support and guidance in managing your anxiety.`,
        `<h3 style="color:white;font-weight:700"> Explore stress-reducing activities: </h3> <br> Journaling, spending time in nature, listening to calming music, or engaging in hobbies you enjoy can all help to reduce stress and anxiety.`
    ];

    const ModerateAnxiety = [
        `<h3 style="color:white;font-weight:700"> Practice regular self-care: </h3> <br> Taking breaks, setting boundaries, and prioritizing tasks can help to reduce stress and prevent burnout.`,
        `<h3 style="color:white;font-weight:700"> Utilize relaxation techniques: </h3> <br> Deep breathing, progressive muscle relaxation, and guided imagery can all be helpful in managing anxiety.`,
        `<h3 style="color:white;font-weight:700"> Consider therapy options: </h3> <br> Cognitive-behavioral therapy (CBT) or mindfulness-based therapies can be very effective in treating anxiety disorders`,
        `<h3 style="color:white;font-weight:700"> Explore medication options with a healthcare professional: </h3> <br> In some cases, medication may be helpful in managing anxiety symptoms.`
    ];

    const SevereAnxiety = [
        `<h3 style="color:white;font-weight:700"> Seek immediate support from a mental health professional or crisis hotline: </h3> <br> If you're experiencing severe anxiety or distress, it's important to seek professional help right away.`,
        `<h3 style="color:white;font-weight:700"> Explore intensive therapy programs or outpatient treatment options: </h3> <br> These programs can provide specialized care and support for managing anxiety disorders.`,
        `<h3 style="color:white;font-weight:700"> Work with a psychiatrist to evaluate medication options: </h3> <br> Medication can be an important part of treatment for severe anxiety.`,
        `<h3 style="color:white;font-weight:700"> Develop a strong support network: </h3> <br> Surround yourself with understanding and supportive people who can provide encouragement and assistance.`
    ];

    const ul = document.getElementById('Anxiety-myList');

        function displayAnxietyLevel(score) {
            let level = '';
            if (score <= 5) {
                level = 'Normal';
                Normal.innerText = level;
                AnxietyResponse.innerText = `Its completely understandable to feel anxious sometimes. It's a natural human response to stress and uncertainty. In fact, a little bit of anxiety can even be helpful in motivating us and keeping us focused. Do you have any particular concerns or situations that are making you feel anxious right now?`;

                /*
                NormalAnxiety.forEach(NormalAnxiety => {
                    const li = document.createElement('li');
                    li.textContent = NormalAnxiety;
                    ul.appendChild(li);
                });
                */
                NormalAnxiety.forEach((sentence, index) => {
                    const li = document.createElement('li'); // Create a list item element
                    
                    // Create a paragraph element and set its text content
                    const p = document.createElement('p');
                    p.innerHTML = sentence;
                
                    // Append the paragraph to the list item
                    li.appendChild(p);
                
                    // Create a button element and set its text content
                    const button = document.createElement('button');
                    button.textContent = 'Read more';
                
                    // Append the button to the list item
                    li.appendChild(button);
                
                    ul.appendChild(li); // Append the list item to the unordered list
                });

            } else if (score <= 10) {
                level = 'Mild Anxiety';
                Normal.innerText = level;
                AnxietyResponse.innerText = `It's common to experience mild anxiety from time to time. It's important to acknowledge these feelings and find healthy ways to cope with them. Have you noticed any specific triggers or situations that seem to increase your anxiety?`;

                /*
                MildAnxiety.forEach(MildAnxiety => {
                    const li = document.createElement('li');
                    li.textContent = MildAnxiety;
                    ul.appendChild(li);
                });
                */

                MildAnxiety.forEach((sentence, index) => {
                    const li = document.createElement('li'); // Create a list item element
                    
                    // Create a paragraph element and set its text content
                    const p = document.createElement('p');
                    p.innerHTML = sentence;
                
                    // Append the paragraph to the list item
                    li.appendChild(p);
                
                    // Create a button element and set its text content
                    const button = document.createElement('button');
                    button.textContent = 'Read more';
                
                    // Append the button to the list item
                    li.appendChild(button);
                
                    ul.appendChild(li); // Append the list item to the unordered list
                });

            } else if (score <= 15) {
                level = 'Moderate Anxiety';
                Normal.innerText = level;
                AnxietyResponse.innerText = `It sounds like your anxiety is causing you some distress. It's important to take steps to manage it effectively. Have you tried any coping strategies in the past? What has worked for you and what hasn't?`;

                /*
                ModerateAnxiety.forEach(ModerateAnxiety => {
                    const li = document.createElement('li');
                    li.textContent = ModerateAnxiety;
                    ul.appendChild(li);
                });
                */

                ModerateAnxiety.forEach((sentence, index) => {
                    const li = document.createElement('li'); // Create a list item element
                    
                    // Create a paragraph element and set its text content
                    const p = document.createElement('p');
                    p.innerHTML = sentence;
                
                    // Append the paragraph to the list item
                    li.appendChild(p);
                
                    // Create a button element and set its text content
                    const button = document.createElement('button');
                    button.textContent = 'Read more';
                
                    // Append the button to the list item
                    li.appendChild(button);
                
                    ul.appendChild(li); // Append the list item to the unordered list
                });

            } else {
                level = 'Severe Anxiety';
                Normal.innerText = level;
                AnxietyResponse.innerText = `It seems like your anxiety is significantly impacting your daily life. It's crucial to seek professional support and develop a comprehensive plan to manage it. Please know that you're not alone and there is help available.`;

                /*
                SevereAnxiety.forEach(SevereAnxiety => {
                    const li = document.createElement('li');
                    li.textContent = SevereAnxiety;
                    ul.appendChild(li);
                });
                */

                SevereAnxiety.forEach((sentence, index) => {
                    const li = document.createElement('li'); // Create a list item element
                    
                    // Create a paragraph element and set its text content
                    const p = document.createElement('p');
                    p.innerHTML = sentence;
                
                    // Append the paragraph to the list item
                    li.appendChild(p);
                
                    // Create a button element and set its text content
                    const button = document.createElement('button');
                    button.textContent = 'Read more';
                
                    // Append the button to the list item
                    li.appendChild(button);
                
                    ul.appendChild(li); // Append the list item to the unordered list
                });


            }

            
        }

        