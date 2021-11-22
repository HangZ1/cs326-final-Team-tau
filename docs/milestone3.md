# Database:
PCComponentData.CPU
| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| name  | String    | Name of the CPU |
| company | String   | Company name |
|score| Integer | score used to calcuate performance|
|price| Integer| price of the CPU|

  
PCComponentData.CPU cooler
| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| name  | String    | Name of the cooler |
|score| Integer | score used to calcuate performance|
|price| Integer| price of the cooler|


PCComponentData.GPU
| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| GPU  | String    | Name of the GPU |
|price| Integer| price of the GPU|

  
PCComponentData.Memory
| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| GB  | Integer    | Size of the memory |
|name| String| Name of the memory|
|price| Integer| price of the memory|
 
PCComponentData.MotherBoard
| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| name  | String    | Name of the MotherBoard |
|score| Integer | score used to calcuate performance|
|price| Integer| price of the MotherBoard|

  
User.ID&password
| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| name  | String    | Username |
|password| String | User password |
  
UserPerference.(CPU, Cpu cooler, GPU, Memory, Motherboard, PC case, Power Supply, Storage)
| Column       | Data Type | Description              |
|--------------|-----------|--------------------------|
| name  | String    | Username |
|Item| String | User name of the componenet |
 

# Division of labor:

Hang Zheng: update and delete UserPerference, /getShoppingCart, /Register

Guanxu: get PCComponentData, /Login, /getPC/:component

Yuchen: get PCComponentData, /addtoShoppingCart/:user, setting up Mongodb
  
