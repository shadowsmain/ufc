from random import random
a = int(random() * 100)
b = int(random() * 100)
if a%2 and b%2 or a%2==0 and b%2==0:
  a += 1
print(a,b)
if a%2:
  print(a)
else:
  print(b)