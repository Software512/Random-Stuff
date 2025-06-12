import pygame
import pygame.camera
import time

pygame.camera.init()
pygame.camera.list_cameras()
cam = pygame.camera.Camera("/dev/video0",(1280,720))
cam.start()
while True:
    img = cam.get_image()
    pygame.image.save(img,"/var/www/html/YardCam/photo.jpg")
    time.sleep(1)
