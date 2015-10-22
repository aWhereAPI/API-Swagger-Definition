{
  "swagger": "2.0",
  "info": {
    "version": "2",
    "title": "aWhere API Platform",
    "description": "aWhere’s Ag Intelligence platform lets you incorporate hyperlocal, field-level weather and agronomic insights for any farming, food security, or commodities application."
  },
  "host": "api.awhere.com",
  "basePath": "/",
  "securityDefinitions": {
    "auth": {
      "type": "oauth2",
      "flow": "implicit",
      "authorizationUrl": ""
    }
  },
  "schemes": [
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "paths": {
    "/v2/fields": {
      "get": {
        "description": "Fields are the way to manage the locations you use in the aWhere API, before using our other APIs you'll need to register the field locations.",
        "tags": [
          "Fields"
        ],
        "operationId": "Fields List",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "integer",
            "format": "int64",
            "description": "Determines the number of fields to include per page"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "integer",
            "format": "int64",
            "description": "Sets the number of field locations to skip when paginating"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The list of fields can be sorted by any of the following properties: name, farmid, acres, latitude, and/or longitude"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are name, farmid, acres, and centerpoint. All other properties are always included."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/FieldsList"
            }
          },
          "400": {
            "description": "Requested set of fields could not be found. Please adjust your request and try again."
          },
          "416": {
            "description": "Not enough fields to fulfill your request."
          },
          "default": {
            "description": "Fields are not available due to a system error."
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      },
      "post": {
        "description": "Create a Field Location in the aWhere Platform.",
        "tags": [
          "Fields"
        ],
        "operationId": "Create a Field",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "x-is-map": false,
            "schema": {
              "$ref": "#/definitions/CreateField"
            }
          },
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "Content-Type",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Field"
            }
          },
          "400": {
            "description": "Your field could not be created at this time. Please check the request and try again."
          },
          "default": {
            "description": "Fields are not available due to a system error."
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/fields/{fieldId}": {
      "get": {
        "description": "Returns a specific field location selected by field ID.",
        "tags": [
          "Fields"
        ],
        "operationId": "Field By ID",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are name, farmid, acres, and centerpoint. All other properties are always included."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Field"
            }
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      },
      "patch": {
        "description": "Use this API to update a field property",
        "tags": [
          "Fields"
        ],
        "operationId": "Update Field",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The unique field ID you used when you created the field."
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "x-is-map": false,
            "description": "Use a JSON-PATCH formatted payload to make changes to the field location.",
            "schema": {
              "type": "object"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Field"
            }
          },
          "400": {
            "description": "Your field could not be updated at this time."
          },
          "default": {
            "description": "Fields are not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/fields/{fieldId}/plantings": {
      "get": {
        "description": "Plantings are the way to manage crop and field activity in the aWhere API. Use this API to record the type of crop, planting date, projections, and actuals to get the most out of our more advanced APIs.",
        "tags": [
          "Plantings"
        ],
        "operationId": "Plantings List for a Field",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "integer",
            "format": "int64",
            "description": "Determines the number of planting records to include per page"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "integer",
            "format": "int64",
            "description": "Sets the number of planting records to skip when paginating"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The list of planting records can be sorted by any of the following properties: id, crop, field, plantingDate, harvestDate"
          },
          {
            "name": "crop",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Returns only the plantings in which a specific crop is planted. "
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Only include these properties in the field location data. If not specified, then all properties are included by default. Any properties not listed at the right are always included.  Options are crop, field, plantingDate, projections, yield, and/or harvestDate. All other properties are always included."
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/PlantingsList"
            }
          },
          "400": {
            "description": "Requested plantings could not be found. Please adjust your request and try again."
          },
          "416": {
            "description": "Not enough plantings to fulfill your request"
          },
          "default": {
            "description": "Plantings are not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      },
      "post": {
        "description": "Create a new planting record in a field location",
        "tags": [
          "Plantings"
        ],
        "operationId": "Create a Planting",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "x-is-map": false,
            "schema": {
              "$ref": "#/definitions/Planting"
            }
          },
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "Content-Type",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Planting"
            }
          },
          "400": {
            "description": "Something was wrong with the request and the planting could not be created. "
          },
          "default": {
            "description": "Plantings are not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/fields/{fieldId}/plantings/{plantingId}": {
      "get": {
        "description": "Returns the most recently created planting in a given field.",
        "tags": [
          "Plantings"
        ],
        "operationId": "Get Planting by ID",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Only include these properties in the field location data. If not specified, then all properties are included by default. Any properties not listed at the right are always included.  Options are crop, field, plantingDate, projections, yield, and/or harvestDate. All other properties are always included."
          },
          {
            "name": "plantingId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The planting record ID provided by aWhere. Or use the word \"current\" here to return only the most recently created planting in this field."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Planting"
            }
          },
          "404": {
            "description": "Requested planting not found."
          },
          "default": {
            "description": "Plantings are not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      },
      "put": {
        "description": "Use this API to replace a planting record with new data (all fields are overwritten)",
        "tags": [
          "Plantings"
        ],
        "operationId": "Update an Entire Planting",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "Content-Type",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "plantingId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The planting record ID provided by aWhere. Or use \"current\" to change only the most recently created planting in that field."
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "x-is-map": false,
            "schema": {
              "$ref": "#/definitions/Planting"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Planting"
            }
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      },
      "patch": {
        "description": "Use this API to update specific properties of a planting record",
        "tags": [
          "Plantings"
        ],
        "operationId": "Update Part of a Planting",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "plantingId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The planting record ID provided by aWhere. Or use \"current\" to change only the most recently created planting in that field."
          },
          {
            "name": "body",
            "in": "body",
            "required": true,
            "x-is-map": false,
            "description": "Use a JSON-PATCH formatted payload to do partial changes. See the documentation for more details.",
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "Content-Type",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Planting"
            }
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/weather/fields/{fieldId}/observations/{startDate},{endDate}": {
      "get": {
        "description": "Returns the observed weather for a field location",
        "tags": [
          "Weather"
        ],
        "operationId": "Daily Observed Weather (Range)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "startDate",
            "in": "path",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The first date in the range"
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Determines the number of days to include per page"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Sets the number of days to skip when paginating"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "You can sort by date using this parameter"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are temperatures, precipitation, solar, relativehumidity, and/or wind. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "endDate",
            "in": "path",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "format": "date-time",
            "description": "The last date in the range"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/ObservationsMultiDay"
            }
          },
          "400": {
            "description": "A problem with the request meant it couldn't be processed"
          },
          "403": {
            "description": "The dates requested fall outside the allowed range for daily observed weather data."
          },
          "404": {
            "description": "Requested weather data not found; please verify the requested dates or location"
          },
          "416": {
            "description": "Not enough days to fulfill your request"
          },
          "default": {
            "description": "Weather is not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/weather/fields/{fieldId}/forecasts/{startDate},{endDate}": {
      "get": {
        "description": "This API returns the forecast for the selected days",
        "tags": [
          "Weather"
        ],
        "operationId": "Forecast (Range)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "startDate",
            "in": "path",
            "required": false,
            "x-is-map": false,
            "default": "today",
            "type": "string",
            "format": "date-time",
            "description": "The first day of the range, must be today or later."
          },
          {
            "name": "endDate",
            "in": "path",
            "required": false,
            "x-is-map": false,
            "default": "8 days from today",
            "type": "string",
            "format": "date-time",
            "description": "The last day of the range, must be after the start date."
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "integer",
            "format": "int64",
            "description": "Determines the number of days to include per page"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "integer",
            "format": "int64",
            "description": "Sets the number of days to skip when paginating"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "You can sort by date using this parameter"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are conditionsCode, conditionsText, temperatures, precipitation, sky, solar, relativeHumidity, and/or wind. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "metric",
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "blocksize",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": 1.0,
            "type": "integer",
            "format": "int64",
            "description": "The number of hours to include in each forecast block. Options are 1, 2, 3, 4, 6, 8, 12, or 24"
          },
          {
            "name": "conditionsType",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "standard",
            "type": "string",
            "description": "Determines whether to use a simple set of conditions codes and text or a more detailed version. Options are \"basic\" or \"standard\""
          },
          {
            "name": "utcffset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "When this is set, the start and end timestamps for each forecast block will be adjusted by this many hours; for example: -04:00 or +12:30"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/ForecastMultiDay"
            }
          },
          "400": {
            "description": "A problem with the request means it couldn't be processed"
          },
          "404": {
            "description": "Requested weather data not found; please verify the requested dates or location"
          },
          "416": {
            "description": "Not enough forecasts to fulfill your request"
          },
          "default": {
            "description": "Data is not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/weather/fields/{fieldId}/observations/{date}": {
      "get": {
        "description": "Returns the observed weather for a field location",
        "tags": [
          "Weather"
        ],
        "operationId": "Daily Observed Weather (Single Date)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "date",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "format": "date-time",
            "description": "The date you want weather for"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are temperatures, precipitation, solar, relativehumidity, and/or wind. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/ObservedWeatherDay"
            }
          },
          "400": {
            "description": "A problem with the request meant it couldn't be processed"
          },
          "403": {
            "description": "The dates requested fall outside the allowed range for daily observed weather data."
          },
          "404": {
            "description": "Requested weather data not found; please verify the requested dates or location"
          },
          "default": {
            "description": "Weather is not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/weather/fields/{fieldId}/forecasts/{date}": {
      "get": {
        "description": "This API returns the forecast for a single day",
        "tags": [
          "Weather"
        ],
        "operationId": "Forecast (Single Date)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "date",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "format": "date-time",
            "description": "The date for which you want the forecast (must be today or later)"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are conditionsCode, conditionsText, temperatures, precipitation, sky, solar, relativeHumidity, and/or wind. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "blocksize",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The number of hours to include in each forecast block. Options are 1, 2, 3, 4, 6, 8, 12, or 24"
          },
          {
            "name": "conditionsType",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Determines whether to use a simple set of conditions codes and text or a more detailed version. Options are \"basic\" or \"standard\""
          },
          {
            "name": "utcOffset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "When this is set, the start and end timestamps for each forecast block will be adjusted by this many hours; for example: -04:00 or +12:30"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/ForecastDay"
            }
          },
          "400": {
            "description": "A problem with the request means it couldn't be processed"
          },
          "404": {
            "description": "Requested weather data not found; please verify the requested dates or location"
          },
          "default": {
            "description": "Data is not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/weather/fields/{fieldId}/norms/{startDay},{endDay}/years/{startYear},{endYear}": {
      "get": {
        "description": "Calculates the averages for weather attributes across a specified range of years",
        "tags": [
          "Weather"
        ],
        "operationId": "Weather Norms",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "startDay",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The month and day to calculate across years. When one date is used. This template shows getting a range of days, but you can also just request a single month-day. Format is MM-DD"
          },
          {
            "name": "endDay",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The month and day to calculate across years. When one date is used. This template shows getting a range of days, but you can also just request a single month-day. Format is MM-DD"
          },
          {
            "name": "startYear",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "default": "10 years ago",
            "type": "string",
            "description": "The first year of the range of years for which to calculate averages"
          },
          {
            "name": "endYear",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "default": "last year",
            "type": "string",
            "description": "The last year of the range of years for which to calculate averages"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "You can sort by date using this parameter"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are meanTemp, maxTemp, minTemp, precipitation, solar, maxHumidity, minHumidity, and/or dailyMaxWind. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "metric",
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "excludeYears",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "A comma separated list of years of exclude from the average. Note that the total number of years used in the average must still be three."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/WeatherNormsList"
            }
          },
          "400": {
            "description": "Requested set of weather norms could not be calculated because of a problem with the request. Please adjust your request and try again."
          },
          "403": {
            "description": "The geolocation requested is outside the allowed"
          },
          "404": {
            "description": "Requested weather data not found; please verify the requested dates or location"
          },
          "default": {
            "description": "Historical norms are not available due to a system error"
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/weather/fields/{fieldId}/currentconditions": {
      "get": {
        "description": "Returns a snapshot of the weather in the field location area.",
        "tags": [
          "Weather"
        ],
        "operationId": "Current Weather",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are temperature, precipitation, solar, relativeHumidity, and/or wind. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "metric",
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "sources",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "all",
            "type": "string",
            "description": "The current conditions API returns the most recent report from the nearest station using three different networks. You can choose the specific network(s) you want to draw from by specifying one of these options: metar, mesonet, metar-mesonet, pws, or all."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/CurrentWeather"
            }
          },
          "400": {
            "description": "A problem with the request meant it couldn't be processed."
          },
          "404": {
            "description": "Requested weather data or field location not found; please verify the requested dates or location"
          },
          "default": {
            "description": "Current weather data is not available due to a system error."
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/fields/{fieldId}/agronomicvalues/{startDate},{endDate}": {
      "get": {
        "description": "Returns calculated agronomic values and accumulations for a range of days",
        "tags": [
          "Agronomics"
        ],
        "operationId": "Agronomic Values and Accumulations (Ranged)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "startDate",
            "in": "path",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The start date of the range. If you leave out the dates, the API attempts to use the most recent planting record."
          },
          {
            "name": "endDate",
            "in": "path",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The end date of the range"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "You can sort by date using this parameter"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are location, accumulations, gdd, pet, ppet, accumulatedGdd, accumulatedPrecipitation, accumulatedPet, accumulatedPpet. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "metric",
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "accumulationStartDate",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "A date from before the range from which to start calculating accumulations"
          },
          {
            "name": "gddMethod",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "standard",
            "type": "string",
            "description": "The ID of the equation to use for GDD calculations. Options are standard, modifiedstandard, min-temp-cap, min-temp-constant"
          },
          {
            "name": "gddBaseTemp",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The base temperature to use when calculating GDDs"
          },
          {
            "name": "gddMinBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The lower boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          },
          {
            "name": "gddMaxBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The upper boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/AgronomicValues"
            }
          },
          "400": {
            "description": "Requested agronomics could not be found due to a problem with the request. "
          },
          "403": {
            "description": "The location requested falls outside the allowed area. "
          },
          "404": {
            "description": "Requested field location or data not found."
          },
          "default": {
            "description": "Agronomics are not available due a system error. "
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/fields/{fieldId}/agronomicvalues/{date}": {
      "get": {
        "description": "Returns calculated agronomic values and accumulations for a single day",
        "tags": [
          "Agronomics"
        ],
        "operationId": "Agronomic Values and Accumulations (Single Day)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "date",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The date to calculate agronomic values for"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are location, accumulations, gdd, pet, ppet, accumulatedGdd, accumulatedPrecipitation, accumulatedPet, accumulatedPpet. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "accumulationStartDate",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "A date from before the range from which to start calculating accumulations"
          },
          {
            "name": "gddMethod",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "standard",
            "type": "string",
            "description": "The ID of the equation to use for GDD calculations. Options are standard, modifiedstandard, min-temp-cap, min-temp-constant"
          },
          {
            "name": "gddBaseTemp",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The base temperature to use when calculating GDDs"
          },
          {
            "name": "gddMinBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The lower boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          },
          {
            "name": "gddMaxBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The upper boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/AgronomicValuesSingleDay"
            }
          },
          "400": {
            "description": "Requested agronomics could not be found due to a problem with the request. "
          },
          "403": {
            "description": "The location requested falls outside the allowed area. "
          },
          "404": {
            "description": "Requested field location or data not found."
          },
          "default": {
            "description": "Agronomics are not available due a system error. "
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/fields/{fieldId}/agronomicnorms/{startDay},{endDay}/years/{startYear},{endYear}": {
      "get": {
        "description": "Returns the long-term averages for agronomic values over any range of years.",
        "tags": [
          "Agronomics"
        ],
        "operationId": "Historical Agronomic Norms (Ranged)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "startDay",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The month and day to calculate across years. When one date is used. This template shows getting a range of days, but you can also just request a single month-day. Format is MM-DD"
          },
          {
            "name": "endDay",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The month and day to calculate across years. When one date is used. This template shows getting a range of days, but you can also just request a single month-day. Format is MM-DD"
          },
          {
            "name": "startYear",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The first year of the range of years for which to calculate averages"
          },
          {
            "name": "endYear",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The last year of the range of years for which to calculate averages"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "You can sort by day using this parameter"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are location, accumulations, gdd, pet, ppet, accumulatedGdd, accumulatedPrecipitation, accumulatedPet, accumulatedPpet. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "metric",
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "accumulationStartDay",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "A day (MM-DD format) from before the range from which to start calculating accumulations. Must be less than a year since the start day."
          },
          {
            "name": "gddMethod",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The ID of the equation to use for GDD calculations. Options are standard, modifiedstandard, min-temp-cap, min-temp-constant"
          },
          {
            "name": "gddBaseTemp",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The base temperature to use when calculating GDDs"
          },
          {
            "name": "gddMinBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The lower boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          },
          {
            "name": "gddMaxBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The upper boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          },
          {
            "name": "excludeYears",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "A comma separated list of years of exclude from the average. Note that the total number of years used in the average must still be three."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/AgronomicNorms"
            }
          },
          "400": {
            "description": "Requested set of agronomic norms could not be calculated due to a problem with the request. Please adjust your request and try again."
          },
          "403": {
            "description": "The location requested falls outside the allowed region"
          },
          "404": {
            "description": "Requested Field Location or data not found. "
          },
          "default": {
            "description": "Agronomics not available due to a system issue. "
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/fields/{fieldId}/agronomicnorms/{day}/years/{startYear},{endYear}": {
      "get": {
        "description": "Returns the long-term averages for agronomic values for a specific day over any range of years.",
        "tags": [
          "Agronomics"
        ],
        "operationId": "Historical Agronomic Norms (Single Day)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "day",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The month and day to calculate across years. Format is MM-DD"
          },
          {
            "name": "startYear",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The first year of the range of years for which to calculate averages"
          },
          {
            "name": "endYear",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The last year of the range of years for which to calculate averages"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Use this parameter to return only the specified properties in the response. Options are location, accumulations, gdd, pet, ppet, accumulatedGdd, accumulatedPrecipitation, accumulatedPet, accumulatedPpet. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          },
          {
            "name": "accumulationStartDay",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "A day (MM-DD format) from before the range from which to start calculating accumulations. Must be less than a year since the start day."
          },
          {
            "name": "gddMethod",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The ID of the equation to use for GDD calculations. Options are standard, modifiedstandard, min-temp-cap, min-temp-constant"
          },
          {
            "name": "gddBaseTemp",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The base temperature to use when calculating GDDs"
          },
          {
            "name": "gddMinBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The lower boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          },
          {
            "name": "gddMaxBoundary",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The upper boundary threshold which is used by some GDD equations to reset the temperature for the calculation (see documentation). "
          },
          {
            "name": "excludeYears",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "A comma separated list of years of exclude from the average. Note that the total number of years used in the average must still be three."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/AgronomicValuesSingleDay"
            }
          },
          "400": {
            "description": "Requested set of agronomic norms could not be calculated due to a problem with the request. Please adjust your request and try again."
          },
          "403": {
            "description": "The location requested falls outside the allowed region"
          },
          "404": {
            "description": "Requested Field Location or data not found. "
          },
          "default": {
            "description": "Agronomics not available due to a system issue. "
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/crops": {
      "get": {
        "description": "Returns a list of the crops currently in the aWhere Platform (for Growth Stage Models)",
        "tags": [
          "Models"
        ],
        "operationId": "Crops",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The number of results to include on each of page of listed fields."
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The number of objects to skip before returning objects"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "List of results can be sorted by any of these properties: id, name, type, and/or variety."
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Only include these properties in the response. Options include name, type, variety, and/or isDefaultForCrop"
          },
          {
            "name": "crop",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Filter the list of models to only those with in a category, as determined by the crop name (e.g., \"corn\").\t"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/CropsList"
            }
          },
          "400": {
            "description": "An problem with the request meant it could not be processed."
          },
          "416": {
            "description": "Not enough crops to fulfill your pagination request"
          },
          "default": {
            "description": "Crops are not available due to a system error."
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/models": {
      "get": {
        "description": "Returns a list of available models in the platform",
        "tags": [
          "Models"
        ],
        "operationId": "List Models",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "limit",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The number of results to include on each of page of listed models"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "The number of objects to skip before returning objects"
          },
          {
            "name": "sort",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "List of results can be sorted by name and/or type."
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Only include these properties in the response. Options include name, description, type, and source; all other properties are always included."
          },
          {
            "name": "crop",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Filter the list of models to only those that apply to a certain crop, such as \"corn\" or \"wheat.\""
          },
          {
            "name": "cropid",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Filter the list of models to only those that apply to a specific crop record"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/ModelsList"
            }
          },
          "400": {
            "description": "A problem in the request meant it couldn't be processed."
          },
          "416": {
            "description": "Not enough models to fulfill your pagination request"
          },
          "default": {
            "description": "Models are not available due to a system error."
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/models/{modelId}/details": {
      "get": {
        "description": "Returns the details about a specific model. For Growth Stage Models this includes the different stages and thresholds.",
        "tags": [
          "Models"
        ],
        "operationId": "Get Model Details (Growth Stage Models)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "modelId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The model ID as supplied by aWhere"
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "metric",
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/GrowthStageModelDetail"
            }
          },
          "404": {
            "description": "No details found for the requested model, or model ID not found. "
          },
          "default": {
            "description": "Models are not available due to a system error."
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    },
    "/v2/agronomics/fields/{fieldId}/models/{modelId}/results": {
      "get": {
        "description": "Returns the results of a model for a specific field (a Planting record in the field is required).",
        "tags": [
          "Models"
        ],
        "operationId": "Get Model Results (Growth Stage Models)",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "Authorization",
            "in": "header",
            "required": true,
            "x-is-map": false,
            "type": "string"
          },
          {
            "name": "fieldId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The Field ID you used when you created the field location."
          },
          {
            "name": "modelId",
            "in": "path",
            "required": true,
            "x-is-map": false,
            "type": "string",
            "description": "The model ID supplied by aWhere"
          },
          {
            "name": "properties",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "type": "string",
            "description": "Only include these properties in the response data. Options include location, plantingDate, biofixDate, currentStage, nextStage, previousStages, and/or gddUnits. All other properties are always included."
          },
          {
            "name": "units",
            "in": "query",
            "required": false,
            "x-is-map": false,
            "default": "metric",
            "type": "string",
            "description": "Set this to \"usa\" to return data in Fahrenheit, inches, and mph."
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/GrowthStageModelResults"
            }
          },
          "400": {
            "description": "The model could not calculate results due to a problem with the request"
          },
          "404": {
            "description": "The field location was not found, no planting record could be found, or requested model not found."
          },
          "default": {
            "description": "Models not available due to a system error. "
          }
        },
        "security": [
          {
            "auth": []
          }
        ]
      }
    }
  },
  "definitions": {
    "PlantingsProjections": {
      "title": "PlantingsProjections",
      "type": "object",
      "properties": {
        "yield": {
          "$ref": "#/definitions/PlantingsActualYield"
        },
        "harvestDate": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "PlantingsList": {
      "title": "PlantingsList",
      "type": "object",
      "properties": {
        "plantings": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Planting"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "plantings",
        "_links"
      ]
    },
    "FieldLocationChild": {
      "title": "FieldLocationChild",
      "type": "object",
      "properties": {
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        },
        "fieldId": {
          "type": "string"
        }
      },
      "required": [
        "latitude",
        "longitude"
      ]
    },
    "Temperatures": {
      "title": "Temperatures",
      "type": "object",
      "properties": {
        "max": {
          "type": "integer",
          "format": "int64"
        },
        "min": {
          "type": "integer",
          "format": "int64"
        },
        "units": {
          "type": "string"
        }
      },
      "required": [
        "max",
        "min",
        "units"
      ]
    },
    "WeatherDataAmountUnits": {
      "title": "WeatherDataAmountUnits",
      "type": "object",
      "properties": {
        "amount": {
          "type": "integer",
          "format": "int64"
        },
        "units": {
          "type": "string"
        }
      },
      "required": [
        "amount",
        "units"
      ]
    },
    "ObservedWind": {
      "title": "ObservedWind",
      "type": "object",
      "properties": {
        "dayMax": {
          "type": "integer",
          "format": "int64"
        },
        "morningMax": {
          "type": "integer",
          "format": "int64"
        },
        "units": {
          "type": "string"
        }
      },
      "required": [
        "dayMax",
        "morningMax",
        "units"
      ]
    },
    "ForecastPrecipitation": {
      "title": "ForecastPrecipitation",
      "type": "object",
      "properties": {
        "amount": {
          "type": "number",
          "format": "double"
        },
        "units": {
          "type": "string"
        },
        "chance": {
          "type": "number",
          "format": "double"
        }
      },
      "required": [
        "amount",
        "units",
        "chance"
      ]
    },
    "ForecastWind": {
      "title": "ForecastWind",
      "type": "object",
      "properties": {
        "average": {
          "type": "number",
          "format": "double"
        },
        "max": {
          "type": "number",
          "format": "double"
        },
        "units": {
          "type": "string"
        }
      },
      "required": [
        "average",
        "max",
        "units"
      ]
    },
    "WeatherNormsList": {
      "title": "WeatherNormsList",
      "type": "object",
      "properties": {
        "norms": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/WeatherNormsDay"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "norms",
        "_links"
      ]
    },
    "WeatherDataAmountOnly": {
      "title": "WeatherDataAmountOnly",
      "type": "object",
      "properties": {
        "amount": {
          "type": "integer",
          "format": "int64"
        }
      },
      "required": [
        "amount"
      ]
    },
    "AgronomicNorms": {
      "title": "AgronomicNorms",
      "type": "object",
      "properties": {
        "location": {
          "$ref": "#/definitions/FieldLocationChild"
        },
        "averageAccumulations": {
          "$ref": "#/definitions/AgronomicTotalAccumulations"
        },
        "dailyAverages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/AgronomicNormsDay"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "location",
        "averageAccumulations",
        "dailyAverages",
        "_links"
      ]
    },
    "CropSingle": {
      "title": "CropSingle",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "variety": {
          "type": "string"
        },
        "isDefaultForCrop": {
          "type": "boolean"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "id",
        "name",
        "isDefaultForCrop",
        "_links"
      ]
    },
    "ModelSingle": {
      "title": "ModelSingle",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "source": {
          "type": "object"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "id",
        "name",
        "description",
        "type",
        "source",
        "_links"
      ]
    },
    "ModelsList": {
      "title": "ModelsList",
      "type": "object",
      "properties": {
        "models": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ModelSingle"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "models",
        "_links"
      ]
    },
    "GrowthStageModelStageDetail": {
      "title": "GrowthStageModelStageDetail",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "stage": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "gddThreshold": {
          "type": "integer",
          "format": "int64"
        },
        "gddUnits": {
          "type": "string"
        }
      },
      "required": [
        "id",
        "stage",
        "description",
        "gddThreshold",
        "gddUnits"
      ]
    },
    "GrowthStageModelDetail": {
      "title": "GrowthStageModelDetail",
      "type": "object",
      "properties": {
        "biofix": {
          "type": "integer",
          "format": "int64"
        },
        "stages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GrowthStageModelStageDetail"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "biofix",
        "stages",
        "_links"
      ]
    },
    "GrowthStageModelResultsPreviousStageInfo": {
      "title": "GrowthStageModelResultsPreviousStageInfo",
      "type": "object",
      "properties": {
        "accumulatedGdd": {
          "type": "integer",
          "format": "int64"
        },
        "date": {
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "accumulatedGdd",
        "date"
      ],
      "allOf": [
        {
          "$ref": "#/definitions/GrowthStageModelStageDetail"
        }
      ]
    },
    "GrowthStageModelResultsNextStageInfo": {
      "title": "GrowthStageModelResultsNextStageInfo",
      "type": "object",
      "properties": {
        "gddRemaining": {
          "type": "integer",
          "format": "int64"
        }
      },
      "required": [
        "gddRemaining"
      ],
      "allOf": [
        {
          "$ref": "#/definitions/GrowthStageModelStageDetail"
        }
      ]
    },
    "GrowthStageModelResults": {
      "title": "GrowthStageModelResults",
      "type": "object",
      "properties": {
        "modelId": {
          "type": "string"
        },
        "location": {
          "$ref": "#/definitions/FieldLocationChild"
        },
        "plantingDate": {
          "type": "string",
          "format": "date-time"
        },
        "biofixDate": {
          "type": "string",
          "format": "date-time"
        },
        "currentStage": {
          "$ref": "#/definitions/GrowthStageModelResultsPreviousStageInfo"
        },
        "nextStage": {
          "$ref": "#/definitions/GrowthStageModelResultsNextStageInfo"
        },
        "previousStages": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GrowthStageModelResultsPreviousStageInfo"
          }
        },
        "gddUnits": {
          "type": "string"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "modelId",
        "location",
        "plantingDate",
        "biofixDate",
        "currentStage",
        "nextStage",
        "previousStages",
        "gddUnits",
        "_links"
      ]
    },
    "FieldsList": {
      "title": "FieldsList",
      "type": "object",
      "properties": {
        "fields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Field"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "fields",
        "_links"
      ]
    },
    "Field": {
      "title": "Field",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "acres": {
          "type": "number",
          "format": "double"
        },
        "centerPoint": {
          "$ref": "#/definitions/FieldCenterPoint"
        },
        "farmId": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "name",
        "acres",
        "centerPoint",
        "farmId",
        "id",
        "_links"
      ]
    },
    "FieldCenterPoint": {
      "title": "FieldCenterPoint",
      "type": "object",
      "properties": {
        "latitude": {
          "type": "number",
          "format": "double"
        },
        "longitude": {
          "type": "number",
          "format": "double"
        }
      },
      "required": [
        "latitude",
        "longitude"
      ]
    },
    "CreateField": {
      "title": "CreateField",
      "description": "Body of a Create-Field Request",
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "farmid": {
          "type": "string"
        },
        "acres": {
          "type": "integer",
          "format": "int64"
        },
        "centerpoint": {
          "$ref": "#/definitions/FieldCenterPoint"
        }
      },
      "required": [
        "id",
        "farmid",
        "acres",
        "centerpoint"
      ]
    },
    "PlantingsActualYield": {
      "title": "PlantingsActualYield",
      "type": "object",
      "properties": {
        "amount": {
          "type": "integer",
          "format": "int64"
        },
        "units": {
          "type": "string"
        }
      }
    },
    "Planting": {
      "title": "Planting",
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int64"
        },
        "crop": {
          "type": "string"
        },
        "field": {
          "type": "string"
        },
        "plantingDate": {
          "type": "string"
        },
        "projections": {
          "$ref": "#/definitions/PlantingsProjections"
        },
        "yield": {
          "$ref": "#/definitions/PlantingsActualYield"
        },
        "harvestDate": {
          "type": "string",
          "format": "date-time"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "id",
        "crop",
        "field",
        "plantingDate",
        "yield"
      ]
    },
    "WeatherDataMinMaxOnly": {
      "title": "WeatherDataMinMaxOnly",
      "type": "object",
      "properties": {
        "min": {
          "type": "number",
          "format": "double"
        },
        "max": {
          "type": "number",
          "format": "double"
        }
      },
      "required": [
        "min",
        "max"
      ]
    },
    "ObservedWeatherDay": {
      "title": "ObservedWeatherDay",
      "type": "object",
      "properties": {
        "date": {
          "type": "string",
          "format": "date-time"
        },
        "location": {
          "$ref": "#/definitions/FieldLocationChild"
        },
        "temperatures": {
          "$ref": "#/definitions/Temperatures"
        },
        "precipitation": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "solar": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "humidity": {
          "$ref": "#/definitions/WeatherDataMinMaxOnly"
        },
        "wind": {
          "$ref": "#/definitions/ObservedWind"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "date",
        "location",
        "temperatures",
        "precipitation",
        "solar",
        "humidity",
        "wind",
        "_links"
      ]
    },
    "ObservationsMultiDay": {
      "title": "ObservationsMultiDay",
      "type": "object",
      "properties": {
        "observations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ObservedWeatherDay"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "observations",
        "_links"
      ]
    },
    "ForecastSky": {
      "title": "ForecastSky",
      "type": "object",
      "properties": {
        "cloudCover": {
          "type": "number",
          "format": "double"
        },
        "sunshine": {
          "type": "number",
          "format": "double"
        }
      },
      "required": [
        "cloudCover",
        "sunshine"
      ]
    },
    "ForecastHumidity": {
      "title": "ForecastHumidity",
      "type": "object",
      "properties": {
        "average": {
          "type": "number",
          "format": "double"
        },
        "max": {
          "type": "number",
          "format": "double"
        }
      },
      "required": [
        "average",
        "max"
      ]
    },
    "ForecastBlock": {
      "title": "ForecastBlock",
      "type": "object",
      "properties": {
        "startTime": {
          "type": "string",
          "format": "date-time"
        },
        "endTime": {
          "type": "string",
          "format": "date-time"
        },
        "conditionsCode": {
          "type": "string"
        },
        "conditionsText": {
          "type": "string"
        },
        "temperatures": {
          "$ref": "#/definitions/Temperatures"
        },
        "precipitation": {
          "$ref": "#/definitions/ForecastPrecipitation"
        },
        "sky": {
          "$ref": "#/definitions/ForecastSky"
        },
        "solar": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "wind": {
          "$ref": "#/definitions/ForecastWind"
        },
        "relativeHumidity": {
          "$ref": "#/definitions/ForecastHumidity"
        }
      },
      "required": [
        "startTime",
        "endTime",
        "conditionsCode",
        "conditionsText",
        "temperatures",
        "precipitation",
        "sky",
        "solar",
        "wind",
        "relativeHumidity"
      ]
    },
    "ForecastDay": {
      "title": "ForecastDay",
      "type": "object",
      "properties": {
        "date": {
          "type": "string",
          "format": "date-time"
        },
        "location": {
          "$ref": "#/definitions/FieldLocationChild"
        },
        "forecast": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ForecastBlock"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "date",
        "location",
        "forecast",
        "_links"
      ]
    },
    "ForecastMultiDay": {
      "title": "ForecastMultiDay",
      "type": "object",
      "properties": {
        "forecasts": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/ForecastDay"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "forecasts",
        "_links"
      ]
    },
    "WeatherNormsChildWithUnits": {
      "title": "WeatherNormsChildWithUnits",
      "type": "object",
      "properties": {
        "average": {
          "type": "number",
          "format": "double"
        },
        "stdDev": {
          "type": "number",
          "format": "double"
        },
        "units": {
          "type": "string"
        }
      },
      "required": [
        "average",
        "stdDev",
        "units"
      ]
    },
    "WeatherNormsChild": {
      "title": "WeatherNormsChild",
      "type": "object",
      "properties": {
        "average": {
          "type": "number",
          "format": "double"
        },
        "stdDev": {
          "type": "number",
          "format": "double"
        }
      },
      "required": [
        "average",
        "stdDev"
      ]
    },
    "WeatherNormsDay": {
      "title": "WeatherNormsDay",
      "type": "object",
      "properties": {
        "day": {
          "type": "string"
        },
        "location": {
          "$ref": "#/definitions/FieldLocationChild"
        },
        "meanTemp": {
          "$ref": "#/definitions/WeatherNormsChildWithUnits"
        },
        "maxTemp": {
          "$ref": "#/definitions/WeatherNormsChildWithUnits"
        },
        "minTemp": {
          "$ref": "#/definitions/WeatherNormsChildWithUnits"
        },
        "precipitation": {
          "$ref": "#/definitions/WeatherNormsChildWithUnits"
        },
        "solar": {
          "$ref": "#/definitions/WeatherNormsChildWithUnits"
        },
        "minHumidity": {
          "$ref": "#/definitions/WeatherNormsChild"
        },
        "maxHumidity": {
          "$ref": "#/definitions/WeatherNormsChild"
        },
        "dailyMaxWind": {
          "$ref": "#/definitions/WeatherNormsChildWithUnits"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "day",
        "location",
        "meanTemp",
        "maxTemp",
        "minTemp",
        "precipitation",
        "solar",
        "minHumidity",
        "maxHumidity",
        "dailyMaxWind",
        "_links"
      ]
    },
    "CurrentWeatherNearestStation": {
      "title": "CurrentWeatherNearestStation",
      "type": "object",
      "properties": {
        "distance": {
          "type": "integer",
          "format": "int64"
        },
        "units": {
          "type": "string"
        },
        "bearing": {
          "type": "integer",
          "format": "int64"
        }
      },
      "required": [
        "distance",
        "units",
        "bearing"
      ]
    },
    "CurrentWeatherLocation": {
      "title": "CurrentWeatherLocation",
      "type": "object",
      "properties": {
        "nearestStation": {
          "$ref": "#/definitions/CurrentWeatherNearestStation"
        }
      },
      "required": [
        "nearestStation"
      ],
      "allOf": [
        {
          "$ref": "#/definitions/FieldLocationChild"
        }
      ]
    },
    "CurrentWeatherWind": {
      "title": "CurrentWeatherWind",
      "type": "object",
      "properties": {
        "bearing": {
          "type": "integer",
          "format": "int64"
        },
        "direction": {
          "type": "string"
        }
      },
      "required": [
        "bearing",
        "direction"
      ],
      "allOf": [
        {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        }
      ]
    },
    "CurrentWeather": {
      "title": "CurrentWeather",
      "type": "object",
      "properties": {
        "dateTime": {
          "type": "string",
          "format": "date-time"
        },
        "location": {
          "$ref": "#/definitions/CurrentWeatherLocation"
        },
        "conditionsCode": {
          "type": "string"
        },
        "conditionsText": {
          "type": "string"
        },
        "temperature": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "precipitation": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "solar": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "relativehumidity": {
          "$ref": "#/definitions/WeatherDataAmountOnly"
        },
        "wind": {
          "$ref": "#/definitions/CurrentWeatherWind"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "dateTime",
        "location",
        "conditionsCode",
        "conditionsText",
        "temperature",
        "precipitation",
        "solar",
        "relativehumidity",
        "wind",
        "_links"
      ]
    },
    "AgronomicTotalAccumulations": {
      "title": "AgronomicTotalAccumulations",
      "type": "object",
      "properties": {
        "gdd": {
          "type": "integer",
          "format": "int64"
        },
        "precipitation": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "pet": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "ppet": {
          "type": "number",
          "format": "double"
        }
      },
      "required": [
        "gdd",
        "precipitation",
        "pet",
        "ppet"
      ]
    },
    "AgronomicValuesDay": {
      "title": "AgronomicValuesDay",
      "type": "object",
      "properties": {
        "date": {
          "type": "string",
          "format": "date-time"
        },
        "gdd": {
          "type": "integer",
          "format": "int64"
        },
        "pet": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "ppet": {
          "type": "integer",
          "format": "int64"
        },
        "accumulatedGdd": {
          "type": "integer",
          "format": "int64"
        },
        "accumulatedPrecipitation": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "accumulatedPet": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "accumulatedPpet": {
          "type": "integer",
          "format": "int64"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "date",
        "gdd",
        "pet",
        "ppet",
        "accumulatedGdd",
        "accumulatedPrecipitation",
        "accumulatedPet",
        "accumulatedPpet",
        "_links"
      ]
    },
    "AgronomicValues": {
      "title": "AgronomicValues",
      "type": "object",
      "properties": {
        "location": {
          "$ref": "#/definitions/FieldLocationChild"
        },
        "accumulations": {
          "$ref": "#/definitions/AgronomicTotalAccumulations"
        },
        "dailyValues": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/AgronomicValuesDay"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "location",
        "_links"
      ]
    },
    "AgronomicValuesSingleDay": {
      "title": "AgronomicValuesSingleDay",
      "type": "object",
      "properties": {
        "date": {
          "type": "string",
          "format": "date-time"
        },
        "location": {
          "$ref": "#/definitions/FieldLocationChild"
        },
        "gdd": {
          "type": "integer",
          "format": "int64"
        },
        "pet": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "ppet": {
          "type": "integer",
          "format": "int64"
        },
        "accumulatedGdd": {
          "type": "integer",
          "format": "int64"
        },
        "accumulatedPrecipitation": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "accumulatedPet": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "accumulatedPpet": {
          "type": "integer",
          "format": "int64"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "date",
        "location",
        "gdd",
        "pet",
        "ppet",
        "accumulatedGdd",
        "accumulatedPrecipitation",
        "accumulatedPet",
        "accumulatedPpet",
        "_links"
      ]
    },
    "AgronomicNormsDay": {
      "title": "AgronomicNormsDay",
      "type": "object",
      "properties": {
        "day": {
          "type": "string"
        },
        "gdd": {
          "type": "integer",
          "format": "int64"
        },
        "pet": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "ppet": {
          "type": "integer",
          "format": "int64"
        },
        "accumulatedGdd": {
          "type": "integer",
          "format": "int64"
        },
        "accumulatedPet": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "accumulatedPpet": {
          "type": "integer",
          "format": "int64"
        },
        "accumulatedPrecipitation": {
          "$ref": "#/definitions/WeatherDataAmountUnits"
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "day",
        "gdd",
        "pet",
        "ppet",
        "accumulatedGdd",
        "accumulatedPet",
        "accumulatedPpet",
        "accumulatedPrecipitation",
        "_links"
      ]
    },
    "CropsList": {
      "title": "CropsList",
      "type": "object",
      "properties": {
        "crops": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CropSingle"
          }
        },
        "_links": {
          "type": "object"
        }
      },
      "required": [
        "crops",
        "_links"
      ]
    }
  }
}