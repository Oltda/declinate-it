# czech-declensions
Webapp with a database where users can save edit and delete czech nouns and adjectives.
It is aimed at helping learners of the Czech language to practice declensions of adjectives and nouns. 
Czech has 7 declensions (nominative, genitive, dative, accusative, vocative, locative, instrumental) 
Users can add nouns and adjectives in their profile and the app will generate exercises with those words.

Appart from the basic CRUD operations, I have included a webcrawler script using the python library beautiful soup 
to automatically extract data from wikipaedia dictionary

Technology used:</br> 
    - Backend: PostgreSQL database and Python – Flask</br> 
    - Frontend: vanilla JS, HTML, CSS frontend   

# Creating Folders

<p align="center">
  <img src="https://github.com/Oltda/declinate-it/blob/master/static/images/Slide2.JPG">
</p>

_________________________________________________________________________________________________________________________
# Adding New Words

Once you have created a folder, you can start adding nouns and adjectives in it.  
After filling the Czech and English input fields the “Declinate” button pops up. Click it!
After clicking the “Declinate” button, the app will look up the word in an online dictionary and 
fill all the declensions for you automatically. 

You’ll have to choose the class and gender manually

![add_noun](https://user-images.githubusercontent.com/75533746/131010236-19304121-c455-4144-915b-be7550105266.gif)
_________________________________________________________________________________________________________________________


<p align="center">
   <img src="https://github.com/Oltda/declinate-it/blob/master/static/images/Slide6.JPG">
</p>

_________________________________________________________________________________________________________________________
# Custom Dictionary

<p align="center">
   <img src="https://github.com/Oltda/declinate-it/blob/master/static/images/Slide7.JPG">
</p>

_________________________________________________________________________________________________________________________

<p align="center">
  <img src="https://github.com/Oltda/declinate-it/blob/master/static/images/Slide8.JPG">
</p>

_________________________________________________________________________________________________________________________

# Exercise 

The app will generate sentence where you have to choose the correct declension of the missing word


![exercise](https://user-images.githubusercontent.com/75533746/131010242-a3753d94-0f28-4383-9d30-3e371cbc7da7.gif)


