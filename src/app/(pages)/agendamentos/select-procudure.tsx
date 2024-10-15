import { UseFormSetValue } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useServices } from '@/hooks/get/use-services'

function SelectProcudure({
  onChange,
}: {
  onChange: UseFormSetValue<{
    name: string
    client: string
    serviceId: string
    employeeId: string
    date: Date
  }>
}) {
  const { services } = useServices()

  return (
    <div className="col-span-3">
      <Label>Procedimeto</Label>
      <Select onValueChange={(e) => onChange('serviceId', e)}>
        <SelectTrigger className="mt-1 w-full">
          <SelectValue placeholder="Selecione um procedimento" />
        </SelectTrigger>
        <SelectContent>
          {services?.map((service) => (
            <SelectItem
              key={service.id}
              className="flex flex-row gap-4"
              value={String(service.id)}
            >
              {service.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { SelectProcudure }

// <SelectItem className="flex flex-row gap-4" value="tintura">
//   Tintura {/* eslint-disable-next-line */}
//   <img
//     className="aspect-video h-8 py-1"
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOUjOyGcmq2n35f0SAB38xgMtbGsQ07ezrw&s"
//   />
// </SelectItem>
// <SelectItem value="esmaltacao">
//   Esmaltação {/* eslint-disable-next-line */}
//   <img
//     className="aspect-video h-8 py-1"
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtDuU2h0t9U0m6u2pAg4YOADeVirE7Ilwzg&s"
//   />
// </SelectItem>
// <SelectItem value="corte-de-cabelo">
//   Corte de cabelo {/* eslint-disable-next-line */}
//   <img
//     className="aspect-video h-8 py-1"
//     src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAQEA8QDw8PDQ8PDw8PDw8OFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFSsZFx0rKysrKysrKy0tLSsrLS03KystKzcrNystKy03LSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EADsQAAIBAgQDBQYDBwQDAAAAAAABAgMRBBIhMQVBUSJhcYGRBhMyobHBI0LwM1JTcoKi4WKy0fEHFJL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAfEQEBAQACAwEAAwAAAAAAAAAAARECAxIhUTIEMUH/2gAMAwEAAhEDEQA/APSKoIqyBcwGzoyTNC2OmBlIEuIUYhqBeUAoBoUhkUUFYlhiiW0BkmVFGiUCRgQAiKQyUQVEuhckA0arCZxIM7iU6Y/KGoAYHEtI0yogumMCJRFZTXlFygMCXEpRDki0hgXKAKgPaLSLgQojEi5IiAmUhCAdItIGA7LcgRNEURzgLbsBSiXlKuMRQrINjTGRQbAWiSiMjEZlJoxsBV4p2bS8dPqZuLY6FGzqaKTyq27FRSm7RqSV1s2pw163Cuvl9OpfujzNbF1cNLWVO3JxbyvuceR08F7R0JxeaUYTim3r2Xp3jR0JRsLkjzlH2xpzqTTjannp0qVnrOU/zPuCpcc99iHCMkqMH2pp/G+Ub8ubfkNHocgcEjkcV9oqGHScpZpS0hGOspN6C8LxfPUS0+B3itXda3+dgOxMRKIz3l/+wZDUJYLQUiRAW4AuJpQMkUISIMaFyABsiYDZcUAZCrEA6ETTAQkaKQFSMszXURncSAIIamUojIRKDgMBURXEMTGlTlOTsknrzJQ6tJxXwOS6pxX1Z5Dj/GZ0mpQ97Ss9VKO66xb0a8zJV9sa9NpQkqkd/hzZV0zXTMvGePwxNPLOnlnrdrWHlzJquFxni068lnlmSXZaWXnzXUOhxupBWUmuWbnboc6Ucrun5WuhcnF93Xo/IzqtfEsVmUWm21fM73Rzq9dvS7Sa1Bl2XdafTwAazarSW9uT8BoUqjvu976HRw3EJUfhektWuWaxzS3IDqYXEq861V56lstGO9pPm+iR1eD4jKnKU99oK7nPrfovM8zCpZ3NLxkpJxv8VlJ3s7dE1si6PqvAMXTqU7xcb31UbtLzZ1D5v7PSxjbWHnCMI9luSSptrm77nt+HuutKs6c9NXTTi0+9X1Kja0XGJaRbZUFYGSLTKkwE1BEjVKImUChSiWWwGARACEHYQ6iIiaKcChzihUqQwFyIE+7sHFFyZSYBOVjyntnxOPu/dNOOe/afOz5HY4/xBYek5uVpbRWjV+9dD5rj+IzruU5dpy3lZvy7jNqsqp72cr8m1t6Fp8nvysFQ7W6f28rAV6DW0nHvTX3MqyYlpPZ/5MU5mivTd2nK/gY5Qf6sBM5SlZgMlyh0tU/ETIiYUZa9QFsKM7GiFRPdeiuMlTpvk15WAXTrStZSkl3No6OB43WpfBZdb3d2ufczlzjFbJ/X5XKfj9gPoXCva2VTLCUZSl+Z046t9/JI9Nh8TnV7Ze5u7PlXCMTWhL8LPdrK1BRV10bsfSuEVKjgnUzZmlu81n00LEdK5LgJl3NBsQJxJFhNFRncBc4mtxBcAMmUhqyEA6FGNzXTjYClANuwEmImMzAsgWy+TtvyvsWymQfOPaLF1KlSUZybinpGLvFM46jle9vueg9p6KjVcbO71lJve/SxyJU9Ltad6aM1YxV8TKHwv5a+qMc+KS2kk0FjKq2Strvqc9TS06+ZFNqVk9r+D6iZtPfR9d7klFvbUBp/rcoGXjfvBDT7imvECRLKsUgI5NDKb/WohsKDYGiVTusu4Xm7l56gu72KlGwDqcteS8Lo9j7IwqSku3K3i5Rt9jxUZd1j3fsBRladS/Z+G1uZYPYpWCRQUUaREMUhbQOYg0JkAgyOZUMsULzkA7UBdZl5hVSZRREwHIW5kD7lxExkNhIDzHtjhbOFTqnFtb3Wp4jGTfNtJc23Jt+Fz6V7V0c2GqNbwtNeW58qrYppt6Xf0/X0MVWRq9+m+9riHp4Gl1+nNdNfXkFUqxa0VraN9X5kVkdZ9yJCSteSTAqavT5gx8wDqWfK3gD2V0+rK93s5O13tzI9dtEUA5XKkmXKFiJgKDpsGRQDL+hHK+gMH1LaXUAodD6t7FYBU8LCX5qr949eWyPlcD7Vw2OSjRj0pQ9bIsD7BIVKZFMqKqsRmGzYuwDYyLAQSLBdiFkKOk2DYKSKiyIFi2h7QLgAuKHQiXCA+ECKRjMNnpVIP81OS+R8fxmAtC/e9PA+2yhoeB4lw9xhLS+tv7rGOdxrhNfOZUmnz62Az230e3gj1+I9nKji5U1nVryUfij3NHm8Tg5Qbi1aW1nyfcSUsYWtF+tS09N/13DHT5+buBUh8ioGWvrr6Ck/kFJf5Bt8ygLt95HEItgC0twGiyACFEtRub8Pw2bs3aKf7278EAGAw+edNW3nBesrH2N6WXRJeiseB9lsB+PSe6i8+29k7fY99MsCpMrMSQFyoamWhdwkwDCgwIjCg7kBuQo7DiJYamCyIsbBCkMgxaHKI2nEQpGim7+ZLcWGOz00ucPH4PNo9szb9d/maeN3hlcXaSasyYKpKos00rttabPv1PLz7PL09XHqvD249XCOPag3F9VyXj1OVi8NRrNrExyycXkxEEsyXWS2fmeyqYZPSyXPbdnI4hg09ktd7meNSvGcS9kqtOPvKVq9OycZUleUV1lDdaHmJYV66bbvvufRvxcO/wANtK92tWnrzNFWjhccmqsVRrv88Gt+Xj5nWcnK8XyWrT1fg+RnlE9rx/2Uq4bNpnp7RqRva/LMuXI81XwbvfqdJWccxoo2Sw/+B2F4bOo7Qi39hqOdlNWH4fJq7tGPNv7I7CwFOh8X4lT+2LM8803d+nJLyGhdGEYNZFd/vyV/RcjbSpOWr1ZMPQ9TqYajYlqyOv7M4e0m+ag/K7sd+aODgOJUcPCpOclmbjGNOPxy0vp08WN4dx1V3Zwya6PNf1NSyFjoyEylYZUEyNMmxkEpCIyDTCHKQSlcRcZBlU2xCsxAOrnCTMcZjoTKjQi0LUwlIgbGRpoSV14ow3H0mSzYsuUPtQ+yn01B4DFugpP9528Lg8ei50rrpZm3BSUadOml+Va99keCzK+pu8YfKKMdeh4G3uBkrl15rHDxOF30Xn4HJxOCTd7W27tT1VWl68jnYmj3d9zpKxY5/DuIuH4da8oN2va7ir7PqjDx32Wp1FnoWi2r5fyvfboa50Ve++vLYPCV5Q7L1jz6x70NTHksL7Ny/OrLa3U0YvLSTp0oq/Nrl59T0XEKunZ1b1TXTqcdYVO7fNsup4vNvCNvUuGFsd6tQSV7MxV4WNaljJTp2NNNW38xS3DxDtTm/wDS/noFkeb99nqTm+bdvDkj13BMPlpqXmeMjFqVlzPoGFh2KcV0RLPbrxnqunNXETRpe1jPVZ6I8hVxiFBphDEHFicwSkUNzEFXIB0IsapCUwlIofFjYsTTQxEBuQynUM7kUpgdOMlJOL2f1ObXx6oSipbKS9OYaqGHidJVJRUpLW9o833I8vbx97Hs/j8/XjXqZtO0lqmk14AsTwyV6UOTUUmuljQzk3QtGSvSurbczYxFVjWMcnEU10Mvud9EuXedSpEyzia1MYXh0Z60UjozRgxCLqY5uJkcys7m/EuxgqmolKihfE5WpP8A1NL7joowcevaklzm2/QqRk4dhXUqx6R1Z7rCw/N3Wj/yec9nsM7t28Welctui0N8OP8AqdnP1kFKYmTKkwEzq4iGWAiNQQtosJksANyF5SAbkw4amaMx9FmhrWxVy1sVJAC5EiwLjoRIKsc/jCyOjW/h1Y5n3N2+500I4hQ97TnD96Lt48iWbFlyu/g3pps9V5mho8/7H8Q97TtL46fZmnya0PRtHhvqvbLshVhVRDWLkjIx1UY5nQqRZlnTKuMUl3mLEROhViZK0DWpY4WKOfNnWxdPc49XQ1K52LiFLDqpOnGSurSb1FQZ0sBC7zdE0jpw91jn6mtdKCissVZcki5SLbJlO7iAEblBaCLpjWxKZbkAVxpnzBpgMIKzFgNizVSMtM10kWDRCQcmLig2iiKCYUtESJKr0IFZ7j6S6mRI1QYFcEwbpYmrNfs6sItrpUT1+R6VHF4fO814M7cdjx90zk9fV74gaFyQwpnB2xnlEROJrkhFRlVhrxMVZG6uzHUsUcnGQOBi4anpsRFWODjoam+Nc+UY4nX4auy/E5MTrYDSHmzv1/pw7P6PcQkUpFNndxEBMK4MiIW2UmFlAYBFuVgYsGbAmYsWQDpwRohIyKQ+myjTCQzMJTJnKH5wZzFOoKlMDQmX7wRGYudQg6XDan4kfP6Ho0zyfD5/iQ8T0uc8ff8Ap6+j8mplC4Nt2Wvcldj/AP1ar2pz9LfU4yX477PpFWRjrTN9XB1f4cjFXw1T+FP/AOZP6F8b8Tyn1hqMzTZpqUpr8k1/RL/gy1Iy/dkv6ZFy/Dyn1mrpM4+OpnalTlyjJ/0yZnq8PrS2pVH/AESRqS/Etn15p6aHSwj7KLxHBcRypT/tX1ZWHpVILLOEotc2tGjv17ry9mYapBxYKREd3Exi2MTF1JEEuLlIrMVIC8wucgZSKvcCs5YNiwOkpDadQTYmYo2qoDOZk94VKsNGl1QFVMsplRqEG3OBmEOoXQTnKMIRc5ydoRirtsK6GCklOH8yPd8P4XdKdVPXWMFpp3sycA9mYUctSvKM626hHtRpv7vv2PQyrLXsvTnLe3gc+XGW7W+PKyZEp2irRiorpFJEc2DKuui8hMsVt2d+4sS7TJTEyn/2BLFLklo7O3J3/wAiZYjfsu29/XSxUMlJipTfV+rKlWWmm/La4qVZK3Zet1o+6+voBc23zfqJnRuXLEK7t4eD3FV8S3dpK1133QGevhE+hzsVw9cvkdCrVktM2tnpl31WvyE1LNu7k+e6St00KPO1+GyWqt4XsYpxa0ej7z1FXDwa2T6btvzMdbDx2cE+cU1qio4EmJlI62JwEX8PZf8AacrE4ecPiWnVbAJcypVQJyEzkEG6hecz3LzgO94WZ/eEA7rKZCBS5AMhAiMFEIAUj13/AI1/a1v5H9CEFV7t7v8AXIx19n+uZCGWoqO4L5FkIUqvt/Uv9yBfMohUZsT8UPP7Gdcv5n/uIQBeK/Zv9cy57IhAJU3f8j+pih9vuWQoB7R8F9AanLwf1IQoy4jZ/rmZK/7NkIEeXqb+oqZCBAIjIQKAhCAf/9k="
//   />
// </SelectItem>
