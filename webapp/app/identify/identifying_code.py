# coding:utf-8
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random
import app.operation

def identifying_make():
    # 随机字母:
    def rndChar():
      return chr(random.randint(65, 90))

  # 随机颜色1:
    def rndColor():
      return (random.randint(64, 255), random.randint(64, 255), random.randint(64, 255))

  # 随机颜色2:
    def rndColor2():
      return (random.randint(32, 127), random.randint(32, 127), random.randint(32, 127))

  # 240 x 60:
    width = 60 * 4
    height = 60
    image = Image.new('RGB', (width, height), (255, 255, 255))
# 创建Font对象:
    font = ImageFont.truetype(r'C:\Windows\WinSxS\amd64_microsoft-windows-font-truetype-arial_31bf3856ad364e35_10.0.14393.0_none_9ff7dbaac40db853\arial.ttf', 36)
# 创建Draw对象，r不可掉
    draw = ImageDraw.Draw(image)
# 填充每个像素:
    for x in range(width):
      for y in range(height):
        draw.point((x, y), fill=rndColor())
# 输出文字:
    for t in range(4):

      word=rndChar()
      draw.text((60 * t + 10, 10), word, font=font, fill=rndColor2())
      app.operation.get_scode(word)
# 模糊:
    image = image.filter(ImageFilter.BLUR)
    image.save('d:/webapp/app/static/code.jpg', 'jpeg')