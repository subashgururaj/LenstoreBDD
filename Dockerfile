FROM microsoft/windowsservercore

RUN dism.exe /online /enable-feature /all /featurename:iis-webserver /NoRestart

RUN echo "Hello World - Dockerfile" 

CMD [ "cmd" ]