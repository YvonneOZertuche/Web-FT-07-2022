

# chloe =  {
#     "firstName" : "Chloe", 
#     "city": "London"
# }

# tri = {
#     "firstName" : "Tri", 
#     "city": "Philly"
# }

# tri["city"]

# class Student:  # class / blueprint
#     def __init__(self, fName, my_city): # constructor
#         # print("I'm a constructor and I was just callsed")
#         self.firstName = fName
#         self.city = my_city
    
#     def greeting(self): 
        
#         print(f'hello {self.firstName}, how is the weather in {self.city}')  # hello chloe, how is the weather in london? 
    

# student1 = Student("chloe", "london")  # creating and instance of the Student class 
# student2 = Student("tri", "philly")

# print(student1.firstName)
# print(student1.greeting())
# print(student2.greeting())
# print(student2.firstName)

# student1 is an object

# student1.greeting()

# print(student1)

# student2 = Student()  # student2 another object of the STudent class 
# print(student2)


# clicked = 0  # global variable
# def button_click(): 
#     clicked +=1 
    



# button_click()
# button_click()

# print(clicked)
    
    
# class Button: 
#     # constructor 
#     def __init__(self): 
#         self.count = 0 
        
        
#     # methods 
#     def handle_click(self): 
#         self.count +=1 
#         print(f'num of clicks is {self.count}')

# navButton = Button()
# helpButton = Button() 
# contactUsButton = Button()

# navButton.handle_click()
# navButton.handle_click()
# navButton.handle_click()
# navButton.handle_click()

# helpButton.handle_click()
# helpButton.handle_click()


# contactUsButton.handle_click()

# navButton.handle_click()
# helpButton.handle_click()
# contactUsButton.handle_click()


# class Area: 
    
#     pi = 3.14 
    
#     def circle(r):
#         return  r * r 
    
# result = Area.circle(3)


# class Calulus: 
    
#     def integration(): 
#         pass 
    
#     def differenitaion() :
#         pass 
    
# import pickle   

# Calculus.integration()
# print(result)


# class Area: 
    
#     PI = 3.14
    
#     def __init__(self, name): 
#         self.name = name
        
#     def print_name(self):
#         print(f'I am a {self.name} pi={Area.PI}')
        

# circle = Area('circle')

# print(circle.PI)
# circle.print_name()

# square = Area('square') 
# print(square.PI)

# square.print_name()


# class Area: 
#     __PI = 3.14 #private
    
#     def __init__(self, name): 
#         self.name = name
        
        
#     # methods 
#     # print pi
#     def print_pi(self):
#         print(self.__PI) 
    
    
# circle = Area("circle")

# circle.__PI = 5 

# circle.print_pi() 


# class Test: 
#     def __init__(self):
#         self.__a = "a"
#         self._b = 'b'
    

# t = Test() 
# t._b = 5
# print(t._b)

# t.__a = 6
# # print(t.__a)


# class Animal:
#   def __init__ (self, name):
#     self.name = name
    
#   def who_am_i(self):
#       print(f'{self.name}')
    
# class Dog (Animal):
#   def woof (self):
#     print("Woof")
    
# class Cat (Animal):
#   def meow (self):
#     print("Meow")
    
    
# fido = Dog("fido")
# fido.woof()
# fido.who_am_i()


# list str int dict 

# name = "Kipp"

# print(name.upper())

class VeroString(str): 
    
    def __init__(self, word): 
        self.word = word # hello 
        
        
    def reverse(self): 
        revString = ""
        for char in self.word: 
            revString = char + revString 
        
        return revString
    

someString = VeroString('hello')

print(someString.upper())
print(someString.reverse().upper())



