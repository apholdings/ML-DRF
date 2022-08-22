import csv
from math import remainder
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os
from django.conf import settings

# Create your views here.

# base_path = os.path.join(settings.BASE_DIR, 'apps/ml/data')

class PreProcesamientoView(APIView):
    def get(self, request, format=None):

        ## PRE PROCESAMIENTO DE DATOS
        #1) Importar librerias
        import numpy as np
        import matplotlib.pyplot as plt
        import pandas as pd

        #2) Importar Dataset
        path = os.path.join(settings.BASE_DIR, 'apps/ml/data/preprocesamiento/Data.csv')
        dataset = pd.read_csv(path)
        X = dataset.iloc[:,17:-1].values
        y = dataset.iloc[:, -1].values
        # print(X)
        # print(y)

        #3) Procesar Datos Faltantes
        from sklearn.impute import SimpleImputer
        imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
        imputer.fit(X[:,1:3])
        X[:, 1:3] = imputer.transform(X[:, 1:3])
        # print('Datos Agregados: ')
        print(X)

        # 4) Codificar Datos Categoricos
        # Codificación de la variable independiente
        from sklearn.compose import ColumnTransformer
        from sklearn.preprocessing import OneHotEncoder
        ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [0])], remainder="passthrough")
        X = np.array(ct.fit_transform(X))
        # print(X)

        # Codificación de la variable dependiente
        from sklearn.preprocessing import LabelEncoder
        le = LabelEncoder()
        y = le.fit_transform(y)
        # print(y)

        # Dividir el conjunto de datos en conjunto de entrenamiento y conjunto de prueba
        from sklearn.model_selection import train_test_split
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 1)
        # print(X_train)
        # print(X_test)
        # print(y_train)
        # print(y_test)

        # Escala de características
        from sklearn.preprocessing import StandardScaler
        sc = StandardScaler()
        X_train[:, 3:] = sc.fit_transform(X_train[:, 3:])
        X_test[:, 3:] = sc.transform(X_test[:, 3:])
        # print(X_train)
        # print(X_test)

        return Response({'data':'serializer.data'}, status=status.HTTP_200_OK)


class RegresionLinealView(APIView):
    def get(self, request, format=None):
        #1) Importar librerias
        import numpy as np
        import matplotlib.pyplot as plt
        import pandas as pd

        # Importar Dataset
        path = os.path.join(settings.BASE_DIR, 'apps/ml/data/regresion/lineal/Data.csv')
        dataset = pd.read_csv(path)

        X = dataset.iloc[:,19:-1].values
        y = dataset.iloc[:, -3].values

        #3) Procesar Datos Faltantes
        from sklearn.impute import SimpleImputer
        imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
        imputer.fit(X[:, 0:1])
        X[:, 0:1] = imputer.transform(X[:, 0:1])
        
        X_variable = X[:,-1]
        y_variable = X[:,0:1]
        # print(X_variable)
        # print(y_variable)

        # Dividir el conjunto de datos en el conjunto de entrenamiento y el conjunto de prueba
        from sklearn.model_selection import train_test_split
        X_train, X_test, y_train, y_test =train_test_split(X_variable, y_variable, test_size = 1/3, random_state = 0)

        X_train_reshaped = X_train.reshape(-1, 1)
        X_test_reshaped = X_test.reshape(-1, 1)

        # Entrenamiento del modelo de regresión lineal simple en el conjunto de entrenamiento
        from sklearn.linear_model import LinearRegression
        regressor = LinearRegression()
        regressor.fit(X_train_reshaped, y_train)

        # Predicción de los resultados del conjunto de pruebas
        y_pred = regressor.predict(X_test_reshaped)

        #Visualizando datos de entrenamiento
        # Visualizar set de Entrenamiento
        # plt.scatter(X_train, y_train, color = 'red')
        # plt.plot(X_train, regressor.predict(X_train), color = 'blue')
        # plt.title('Salary vs Experience (Training set)')
        # plt.xlabel('Years of Experience')
        # plt.ylabel('Salary')
        # plt.show()

        # Visualizar set de Prueba
        # plt.scatter(X_test, y_test, color = 'red')
        # plt.plot(X_train, regressor.predict(X_train), color = 'blue')
        # plt.title('Salary vs Experience (Test set)')
        # plt.xlabel('Years of Experience')
        # plt.ylabel('Salary')
        # plt.show()

        x_train_str = X_train_reshaped.flatten().tolist()
        x_test_str = X_test_reshaped.flatten().tolist()
        y_train_str = y_train.flatten().tolist()
        y_test_str = y_test.flatten().tolist()
        regresor_predict_str = regressor.predict(X_train_reshaped).flatten().tolist()
        
        return Response({
            'x_train':x_train_str,
            'x_test':x_test_str,
            'y_train':y_train_str,
            'y_test':y_test_str,
            'y_train_predict':regresor_predict_str,
            'title_train':'Salary vs Experience (Training set)',
            'xlabel_train':'Years of Experience',
            'ylabel_train':'Salary'
            }, status=status.HTTP_200_OK)
