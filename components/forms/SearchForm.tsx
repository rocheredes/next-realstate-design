'use client'

import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { Input } from '../ui/input'
import { SearchFormValidation } from '@/lib/validations/SearchFormValidation'
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';


const SearchForm = () => {
  const form = useForm({
    resolver: zodResolver(SearchFormValidation),
    defaultValues: {
      city: '',
      propertyType: '',
      rooms: ''
    }
  })
  return (
    <section className='search-form_container shadow-lg rounded-[20px]'>
      <Form {...form}>
        <form>

          <div className='border-b'>
            <RadioGroup defaultValue="card" className="flex flex-row px-5">
              <div className='flex-1'>
                <RadioGroupItem value="card" id="card" className="peer sr-only" />
                <Label
                  htmlFor="card"
                  className="flex flex-col items-center text-buttons-text leading-6 py-4 search-form_radio-buttons"
                >
                  For Sale
                </Label>
              </div>
              <div className='flex-1'>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center text-buttons-text leading-6 py-4 search-form_radio-buttons"
                >
                  For Rent
                </Label>
              </div>

            </RadioGroup>
          </div>
          <div className='flex flex-col gap-5 py-7 px-5'>
            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem className='flex flex-row gap-5'>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='New York'
                      className='search-form_input no-focus placeholder:text-light-1 placeholder:text-regular-text'
                      {...field}

                    />
                  </FormControl>
                </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name='rooms'
              render={({ field }) => (
                <FormItem className='flex flex-row gap-5'>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Select rooms'
                      className='search-form_input no-focus placeholder:text-light-1 placeholder:text-regular-text'
                      {...field}

                    />
                  </FormControl>
                </FormItem>

              )}
            />

            <FormField
              control={form.control}
              name='propertyType'
              render={({ field }) => (
                <FormItem className=''>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='Select property type'
                      className='search-form_input no-focus placeholder:text-light-1 placeholder:text-regular-text'
                      {...field}

                    />
                  </FormControl>
                </FormItem>

              )}
            />



            <div className='flex flex-row items-start gap-2 text-primary-500 cursor-pointer'>
              <AdjustmentsVerticalIcon className='w-5 h-5 flex-shrink-0' />
              <p className='text-regular-text'>Advance Search</p>
            </div>

            <Button className='bg-primary-500 mt-5 !text-white text-regular-text rounded-[3rem] hover:bg-violet-950'>
              <MagnifyingGlassIcon className='w-5 h-5 mr-3' />
              Search
            </Button>
          </div>
        </form>

      </Form>
    </section >

  )
}

export default SearchForm