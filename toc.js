module.exports = {
  middlewareDoc: [
    'productdescription-de-doc/README',
    {
      type: 'category',
      label: 'Produkte & Services',
      items: [
        'productdescription-de-doc/product-service-description/README',
        'productdescription-de-doc/product-service-description/business-model-germany',
        'productdescription-de-doc/product-service-description/legal-basis-germany',
        {
          type: 'category',
          label: 'Compliance-as-a-Service',
          items: [
            'productdescription-de-doc/product-service-description/compliance-as-a-service/README',
            {
              type: 'category',
              label: 'Produkte',
              items: [
                'productdescription-de-doc/product-service-description/compliance-as-a-service/products/middleware',
                'productdescription-de-doc/product-service-description/compliance-as-a-service/products/tax-authority-notification',
              ]
            },
            {
              type: 'category',
              label: 'Features',
              items: [
                {
                  type: 'category',
                  label: 'Sicherheits- & Basisfeatures',
                  items: [
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/chaining',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/queue-abstraction',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/scu-abstraction',
                    {
                      type: 'category',
                      label: 'TSE-as-a-service',
                      items: [
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/README',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/a-trust',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/cryptovision',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/deutsche-fiskal',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/diebold-nixdorf',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/epson',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/fiskaly',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/swissbit',
                        'productdescription-de-doc/product-service-description/compliance-as-a-service/features/basics/tse-as-a-service/swissbit-cloud',
                      ]
                    }
                  ]
                },
                {
                  type: 'category',
                  label: 'Upload- & Exportfeatures',
                  items: [
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/upload-and-export/dsfinvk-export',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/upload-and-export/dfka-taxonomie-export',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/upload-and-export/tar-unload-and-export',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/upload-and-export/pos-archive-upload'
                  ]
                },
                {
                  type: 'category',
                  label: 'Unterstützte Datenbanken',
                  items: [
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/supported-databases/entity-framework',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/supported-databases/mysql',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/supported-databases/sqlite'
                  ]
                },
                {
                  type: 'category',
                  label: 'Unterstützte Plattformen',
                  items: [
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/supported-platforms/windows',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/supported-platforms/linux',
                    'productdescription-de-doc/product-service-description/compliance-as-a-service/features/supported-platforms/android'
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Revisionssichere Daten-as-a-Service',
          items: [
            'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/README',
            {
              type: 'category',
              label: 'Produkte',
              items: [
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/products/README',
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/products/pos-archive',
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/products/ako',
              ]
            },
            {
              type: 'category',
              label: 'Features',
              items: [
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/features/revision-safe-cloud-storage',
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/features/revision-safe-receipt-data',
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/features/aggregated-export',
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/features/dsfinvk-upload',
                'productdescription-de-doc/product-service-description/revisionsafe-data-as-a-service/features/tar-file-upload',
              ]
            }
          ]
        }
      ]
    },
    'productdescription-de-doc/glossar/README',
    'productdescription-de-doc/leistungsbeschreibung/README',
  ]
}