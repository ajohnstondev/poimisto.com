import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import * as S from './styled'
import Select from 'react-select'
import BookingCalendar from './BookingCalendar';
import { ContactForm } from '@/components/Forms'

const BookAMeeting = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [bookedDatetime, setBookedDatetime] = useState<Date | null>(null)
  // For choose meeting time form
  const [weeksFromNow, setWeeksFromNow] = useState(0)

  const [forcedHeight, setForcedHeight] = useState(0);

  

  useEffect(() => {
    if(document && document.querySelector('.book-a-meeting')){
      setForcedHeight(document.querySelector('.book-a-meeting').clientHeight);
    }
  }, []);

  const availableContactPersons = [
    { value: 'SanteriSalonen', label: 'Santeri Salonen' },
  ]

  return (
      
    <S.BookAMeeting className="book-a-meeting" style={{minHeight: ( forcedHeight ) ? forcedHeight + 'px' : 'auto'  }}>
      
      <S.MeetingWithWrapper>
        <S.BookAMeetingTitle>Book a Meeting with</S.BookAMeetingTitle>
        <S.SelectWrapper>
          <Select options={availableContactPersons} defaultValue={availableContactPersons[0]} />
        </S.SelectWrapper>
        
      </S.MeetingWithWrapper>

      <S.FormWrapper>

        <div style={{display: (selectedDate) ? "none" : 'block'}}>
          <BookingCalendar 
            weeksFromNow={weeksFromNow}
            setWeeksFromNow={setWeeksFromNow}
            setDate={setSelectedDate}
          />
        </div>
        <div style={{display: (selectedDate) ? "block" : 'none'}}>
          
          <S.FormHead>
            <h3>
              {(selectedDate && selectedDate.constructor.name === 'Date')  ? format(selectedDate, 'dd.MM.yyyy HH:mm') : ""} 
              <S.SwitchTime onClick={() => setSelectedDate(null)}>(switch time)</S.SwitchTime>
            </h3>
          </S.FormHead>

          <ContactForm
            name="book-a-meeting"
            path="/"
            submitText="Book a meeting"
            submitSuccessText="Booked!"
            submitSuccess={() => {
              console.log('SUCCESS');
              setBookedDatetime(selectedDate)
            }}
            inputs={[
              {
                name: "datetime",
                type: "hidden",
                value: (selectedDate) ? selectedDate.toISOString() : ''
              },
              {
                name: "name",
                type: "text",
                placeholder: "Your name",
                required: "Required",
              },
              {
                name: "email",
                type: "email",
                placeholder: "Your business email",
                required: "Required",
              },
              ,
              {
                name: "message",
                type: "textarea",
                placeholder: "Your introduction message"
              }
            ]}
          />
          <div style={{marginTop:"10px",textAlign:"center"}}>

            {bookedDatetime && `${bookedDatetime}`}
         
          </div>
       
        </div>

      </S.FormWrapper>

    </S.BookAMeeting>




  )
}

export default BookAMeeting
