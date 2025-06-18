import random

# Lista de frases motivadoras
frases = [
    "¡Puedes con esto y más!",
    "Recuerda por qué empezaste.",
    "Cada paso te acerca a tu meta.",
    "No te rindas. Lo mejor está por venir.",
    "Un café más y salvas el mundo ☕",
    "Hoy es un buen día para lograrlo.",
    "Eres más fuerte de lo que crees.",
    "¡Vamos, solo queda un bloque más!"
]

while True:

# Elegir una frase al azar
frase = random.choice(frases)

# Mostrarla en pantalla
print("✨ Tu frase motivadora:")
print(frase)

respuesta= input (Quieres otra frase?).lower

if respuesta != 's' : 
print("Que tal y cual")

break