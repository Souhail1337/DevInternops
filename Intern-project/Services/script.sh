if ["$(sudo docker ps -qa)" ]; then
sudo docker stop $(sudo docker ps -qa);
sudo docker rm $(sudo docker ps -qa)
fi

if ["$(sudo docker images -qa)"]; then
    sudo docker rmi -f $(sudo docker images -qa)
fi
