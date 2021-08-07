from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os

opt = Options()
opt.add_argument("--disable-infobars")
opt.add_argument("start-maximized")
opt.add_argument("--disable-extensions")
opt.add_argument("--headless")
opt.add_argument('window-size=1920x1080')
opt.add_argument('use-fake-ui-for-media-stream')
opt.add_argument('--remote-debugging-port=9222')
opt.add_experimental_option("prefs", {
    "profile.default_content_setting_values.media_stream_mic": 1,
    "profile.default_content_setting_values.media_stream_camera": 1,
    "profile.default_content_setting_values.geolocation": 1,
    "profile.default_content_setting_values.notifications": 1
})

driver = webdriver.Chrome(
    options=opt, executable_path='/usr/lib/chromium-browser/chromedriver')
driver.get('file://' + os.getcwd() + '/index.html')

print("Headless browser started...")
